import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../service/data.service';
import Dynamsoft from 'dwt';
import { WebTwain } from 'dwt/dist/types/WebTwain';
import { DynamsoftService } from '../../service/dynamsoft.service';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddremarkScannerComponent } from '../addremark-scanner/addremark-scanner.component';
import { ConfirmationDialogAddRemarkScanComponent } from '../confirmation-dialog/confirmation-dialog-add-remark-scan/confirmation-dialog-add-remark-scan.component';
import { ConfirmationDialogStopScanComponent } from '../confirmation-dialog/confirmation-dialog-stop-scan/confirmation-dialog-stop-scan.component';
import { ConfirmationDialogEndScanComponent } from '../confirmation-dialog/confirmation-dialog-end-scan/confirmation-dialog-end-scan.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogAddMoreComponent } from '../confirmation-dialog/confirmation-dialog-add-more/confirmation-dialog-add-more.component';
import { ConfirmationDialogClearScanComponent } from '../confirmation-dialog/confirmation-dialog-clear-scan/confirmation-dialog-clear-scan.component';

@Component({
  selector: 'app-head-scanner',
  standalone: true,
  imports: [
    RouterLink,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
  ],
  templateUrl: './head-scanner.component.html',
  styleUrls: ['./head-scanner.component.css']
})
export class HeadScannerComponent implements OnInit {
  @ViewChild('messageBoxDialog') messageBoxDialog: any;
  @Output() dialogOpen = new EventEmitter<boolean>();

  containerId = 'dwtcontrolContainer';
  DWObject: WebTwain | any = null;

  path_img = [
    './assets/scanner/zoom-in.png', './assets/scanner/ZoomOut.png', './assets/scanner/nextPage.png',
    './assets/scanner/previousPage.png'
  ];

  barcodeResults: any[] = [];
  Folder: number = 0;
  Page: number = 0;
  MaxPage: number = 5;
  barcode: string = '';
  docs: Documentdata[] = [];
  cuntFolder: number = -1;

  isScanning: boolean = false;
  mixedBarcodeFound: boolean = false;

  constructor(
    private dataService: DataService,
    private dynamsoftService: DynamsoftService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log("Folder: " + this.Folder, " Page: " + this.Page);
    Dynamsoft.DWT.Containers = [
      {
        WebTwainId: 'dwtObject',
        ContainerId: this.containerId,
        Width: '0px',
        Height: '0px'
      }
    ];
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => {
      this.Dynamsoft_OnReady();
    });
    Dynamsoft.DWT.ProductKey = 't01898AUAADqpfiwCdum8DS4zwO0GaXGvhvvyqqHGpvCxGE+yMnPwjVU2Etw/X4PCKH60MIG3sKcz2xGDrAqUfsFCSQeahU3t9c+pAk7L7zTkd7KAU4+cQDsP47Lb1TxvmqAReM+AbcdhA5gCSy0HoAtrbfQAeYA5gHk10AMuV3H++cIxIOnXOxs6OVXAafmdaUDyOFnAqUfOISB1RNUPq+2XgDA9OTtAHmCXANeL7BQQHAF5gJ0ARllAaz+J4DGR';
    Dynamsoft.DWT.ResourcesPath = 'assets/dwt-resources';
    Dynamsoft.DWT.Load();

    const scanButtonDisabled = localStorage.getItem('scanButtonDisabled');
    this.isScanning = scanButtonDisabled === 'true';
  }

  Dynamsoft_OnReady() {
    this.DWObject = Dynamsoft.DWT.GetWebTwain(this.containerId);
  }

  acquireImage() {
    this.isScanning = true;
    localStorage.setItem('scanButtonDisabled', 'true');

    if (this.DWObject) {
      this.DWObject.SelectSourceAsync()
        .then(() => {
          return this.DWObject.AcquireImageAsync({
            IfCloseSourceAfterAcquire: true,
            IfShowUI: true,
            PixelType: Dynamsoft.DWT.EnumDWT_PixelType.TWPT_GRAY,
            Resolution: 150,
          });
        })
        .then(() => {
          this.processAcquiredImages();
        })
        .catch((exp: any) => {
          console.error(exp.message);
          this.isScanning = false;
          localStorage.removeItem('scanButtonDisabled');
        });
    }
  }

  async processAcquiredImages(): Promise<void> {
    for (let index = 0; index < this.DWObject.HowManyImagesInBuffer; index++) {
      let base64 = await this.decodeBase64([index]);
      let code = await this.decodeBarcode(base64);
      if (!this.barcode) {
        this.barcode = code;
      }
      if (code === this.barcode) {
        await this.saveDataDocument(code, base64);
      } else {
        this.mixedBarcodeFound = true;
      }
    }
    this.dataService.setDocumentData(this.docs);
    if (this.docs.length > 0) {
      this.dataService.setImageData(this.docs[0].pages[0]);
    }

    this.openAddMorePagesDialog();

    if (this.mixedBarcodeFound) {
      this.snackBar.open('การแสกนสำเร็จ แต่ระบบตรวจพบการแทรกของเอกสารอื่น โปรดตรวจสอบการจัดเรียง ไม่จำเป็นต้องแสกนใหม่', 'Close', {
        duration: 10000,
      });
    }

    if (this.DWObject) {
      this.DWObject.RemoveAllImages();
    }
  }

  async saveDataDocument(code: string, base64: string): Promise<void> {
    let doc: Documentdata = { barcode: "", pages: [] };
    if (this.docs.length === 0 || this.docs[this.cuntFolder].barcode !== code) {
      this.cuntFolder++;
      doc.barcode = code;
      doc.tag = this.cuntFolder.toString();
      doc.pages.push(base64);
      this.docs.push(doc);
    } else {
      this.docs[this.cuntFolder].pages.push(base64);
    }
  }

  async decodeBase64(index: [number]): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.DWObject.ConvertToBase64(index, Dynamsoft.DWT.EnumDWT_ImageType.IT_JPG, (result: any, indices: any, type: any) => {
          let base64 = result.getData(0, result.getLength());
          resolve(base64);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async decodeBarcode(base64: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let barcodeResults: any = await this.dynamsoftService.decodeFromBase64(base64);
        let barcode = (barcodeResults[0] === true) ? barcodeResults[1][0].barcodeText : this.barcode;
        resolve(barcode);
      } catch (error) {
        reject(error);
      }
    });
  }

  openReturnAddRemarkDialog() {
    const confirmDialogRef = this.dialog.open(
      ConfirmationDialogAddRemarkScanComponent,
      { width: '300px' }
    );

    confirmDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialogOpen.emit(true);
        const dialogRef = this.dialog.open(AddremarkScannerComponent, {
          width: '30%',
          height: 'auto',
          panelClass: 'custom-dialog-container',
          autoFocus: false,
          disableClose: true,
        });

        dialogRef.afterClosed().subscribe(() => {
          this.dialogOpen.emit(false);
          console.log('The dialog was closed');
        });
      }
    });
  }

  openReturnStop() {
    this.dialog.open(ConfirmationDialogStopScanComponent, { width: '300px' });
  }

  openReturnEndScan() {
    this.dialog.open(ConfirmationDialogEndScanComponent, { width: '300px' });
  }

  openAddMorePagesDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogAddMoreComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.acquireImage();
      } else {
        console.log('User chose not to add more pages');
      }
    });
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogClearScanComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.resetPage();
      }
    });
  }

  resetPage(): void {
    localStorage.removeItem('scanButtonDisabled');
    window.location.reload();
  }
}

interface Documentdata {
  barcode: string;
  pages: string[];
  tag?: string;
}
