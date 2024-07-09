import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-end-scan',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-dialog-end-scan.component.html',
  styleUrl: './confirmation-dialog-end-scan.component.css'
})
export class ConfirmationDialogEndScanComponent {
  
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogEndScanComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
