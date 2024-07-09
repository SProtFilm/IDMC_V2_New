import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';
import { DataService } from '../../service/data.service'; // Adjust the path based on your actual DataService location
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  styleUrls: ['./document-list.component.css'],
  templateUrl: './document-list.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class DocumentListComponent implements OnInit, OnDestroy {
  @ViewChildren('checkboxes') checkboxes!: QueryList<ElementRef>;
  checker: ElementRef[] = [];
  areAllChecked = false;
  @Input() documentdata: DocumentData[] = [];
  @Input() imageSource: string = '';
  @Input() Page: number = 0;
  private documentDataSubscription!: Subscription;
  private imageSourceSubscription!: Subscription;

  numFileScan: FileScan[] = [];
  private currentCheckboxIndex: number = 0;
  private scanningBarcode: string | null = null; // Track the current barcode being scanned

  constructor(
    private dataservice: DataService
  ) {
    this.documentdata = this.dataservice.getDocumentData();
    this.Page = this.dataservice.getPageData();
  }

  ngOnInit(): void {
    this.documentDataSubscription = this.dataservice.documentData$.subscribe(
      (newData) => {
        this.documentdata = newData;
        if (this.dataservice.getDocumentData().length !== 0) {
          this.initFileScanData();
        }
      }
    );
    this.imageSourceSubscription = this.dataservice.imgSource$.subscribe(
      (newImg) => {
        if (this.dataservice.getDocumentData().length > 0) {
          setTimeout(() => {
            this.addCheckTolist();
            this.check();
          }, 200);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.documentDataSubscription.unsubscribe();
    this.imageSourceSubscription.unsubscribe();
  }

  addNewDataDoc(barcode: string, pages: string[]) {
    // Clear previous data
    this.numFileScan = [];
    // Set current scanning barcode
    this.scanningBarcode = barcode;
    // Create FileScan object
    let filedoc: FileScan = {
      barcode: barcode,
      pages: pages,
      status: 'Pending',
      checkbox: [],
    };
    // Add to numFileScan
    this.numFileScan.push(filedoc);
  }  

  addCheckTolist() {
    if (this.numFileScan.length > 0 && this.numFileScan[0].pages != null) {
      this.checker = this.checkboxes.toArray();
      let currentBox = 0;
      for (let item of this.numFileScan) {
        let itemIndex = this.numFileScan.indexOf(item);
        for (let index = 0; index < item.pages.length; index++) {
          this.numFileScan[itemIndex].checkbox.push(this.checker[currentBox]);
          currentBox++;
        }
      }
      this.checker = [];
    }
  }

  initFileScanData(): void {
    // Initialize numFileScan based on this.documentdata
    this.numFileScan = this.documentdata.map(doc => ({
      barcode: doc.barcode,
      pages: doc.pages,
      status: 'Pending',
      checkbox: [],
      detailsOpen: true
    }));
  }

  listCheckedCheckboxes(barcode: string, pages: string[]): void {
    // Check if the scanned barcode matches the currently tracked barcode for scanning both sides
    if (this.scanningBarcode && barcode !== this.scanningBarcode) {
      // If a different barcode is detected, stop scanning both sides
      this.scanningBarcode = null;
      // Clear numFileScan
      this.numFileScan = [];
    }
  
    if (this.scanningBarcode === barcode) {
      // Only proceed if scanningBarcode matches the current barcode
      this.addNewDataDoc(barcode, pages);
      this.addCheckTolist();
      this.check();
      this.dataservice.setImageData(this.imageSource);
    } else {
      // Handle logic when a different barcode is detected or scanning is not active
      // Example: this.handleDifferentBarcodeDetection();
    }
  }

  check() {
    let headbox: HTMLInputElement[] = [];
    for (let item of this.numFileScan) {
      let itemIndex = this.numFileScan.indexOf(item);
      const element = document.getElementById(
        this.numFileScan[itemIndex].barcode
      ) as HTMLInputElement;
      headbox.push(element);
      if (
        this.numFileScan[itemIndex].checkbox.length ===
        this.numFileScan[itemIndex].checkbox.filter(
          (value) => value.nativeElement.checked
        ).length
      ) {
        this.numFileScan[itemIndex].status = 'Completed';
        element.checked = true;
      } else {
        this.numFileScan[itemIndex].status = 'Pending';
        element.checked = false;
      }
    }
    const headcheck = document.getElementById('headerbox') as HTMLInputElement;
    if (headbox.length === headbox.filter((value) => value.checked).length) {
      headcheck.checked = true;
    } else {
      headcheck.checked = false;
    }
    headbox = [];
  }  

  getTotalBarcodes(): number {
    return this.numFileScan.length;
  }

  getTotalPages(): number {
    let totalPages = 0;
    this.documentdata.forEach((doc) => {
      totalPages += doc.pages.length;
    });
    return totalPages;
  }

  setImageSource(pageIndex: number): void {
    if (
      this.numFileScan.length > 0 &&
      this.numFileScan[0].pages.length > pageIndex
    ) {
      this.imageSource = this.numFileScan[0].pages[pageIndex];
      this.dataservice.setImageData(this.imageSource);
    }
  }

  updateCheckboxState(index: number, checked: boolean): void {
    if (
      this.numFileScan.length > 0 &&
      this.numFileScan[0].checkbox.length > index
    ) {
      this.numFileScan[0].checkbox[index].nativeElement.checked = checked;
    }
  }

  previousPage(): void {
    if (this.Page > 0) {
      // Uncheck the current page
      this.updateCheckboxState(this.Page, false);
      this.Page--; // Check the new current page
      this.updateCheckboxState(this.Page, true);
      this.setImageSource(this.Page); // Update the image source
    }
  }

  nextPage(): void {
    if (this.Page < this.getTotalPages() - 1) {
      // Uncheck the current page
      this.updateCheckboxState(this.Page, false);
      this.Page++; // Check the new current page
      this.updateCheckboxState(this.Page, true);
      this.setImageSource(this.Page); // Update the image source
    }
  }
}

interface FileScan {
  barcode: string;
  pages: string[];
  status: string;
  checkbox: ElementRef[];
  tag?: string;
}

interface DocumentData {
  barcode: string;
  pages: string[];
}