import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddremarkScannerComponent } from '../addremark-scanner/addremark-scanner.component';
import { ConfirmationDialogAddRemarkScanComponent } from '../confirmation-dialog/confirmation-dialog-add-remark-scan/confirmation-dialog-add-remark-scan.component';
import { ConfirmationDialogStopScanComponent } from '../confirmation-dialog/confirmation-dialog-stop-scan/confirmation-dialog-stop-scan.component';
import { ConfirmationDialogClearScanComponent } from '../confirmation-dialog/confirmation-dialog-clear-scan/confirmation-dialog-clear-scan.component';
import { ConfirmationDialogEndScanComponent } from '../confirmation-dialog/confirmation-dialog-end-scan/confirmation-dialog-end-scan.component';



@Component({
  selector: 'app-head-scanner',
  standalone: true,
  imports: [    
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule],
  templateUrl: './head-scanner.component.html',
  styleUrl: './head-scanner.component.css'
})
export class HeadScannerComponent {

  @Output() dialogOpen = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {}

// ส่งกลับเพื่อลงทะเบียนใหม่

  openReturnAddRemarkDialog() {
    const confirmDialogRef = this.dialog.open(ConfirmationDialogAddRemarkScanComponent, {
      width: '300px'
    });

    confirmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogOpen.emit(true);
        const dialogRef = this.dialog.open(AddremarkScannerComponent, {
          width: '30%',
          height: 'auto',
          panelClass: 'custom-dialog-container',
          autoFocus: false,
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(() => {
          this.dialogOpen.emit(false);
          console.log('The dialog was closed');
        });
      }
    });
  }

// หยุดแสกน

  openReturnStop() {
    const confirmDialogRef = this.dialog.open(ConfirmationDialogStopScanComponent, {
      width: '300px'
    });

  }

// Clear Batch
  openReturnClear() {
    const confirmDialogRef = this.dialog.open(ConfirmationDialogClearScanComponent, {
      width: '300px'
    });

  }

  openReturnEndScan(){
    const confirmDialogRef = this.dialog.open(ConfirmationDialogEndScanComponent, {
      width: '300px'
    });

  }
}




