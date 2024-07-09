import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-add-remark-scan',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-dialog-add-remark-scan.component.html',
  styleUrl: './confirmation-dialog-add-remark-scan.component.css'
})
export class ConfirmationDialogAddRemarkScanComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogAddRemarkScanComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
