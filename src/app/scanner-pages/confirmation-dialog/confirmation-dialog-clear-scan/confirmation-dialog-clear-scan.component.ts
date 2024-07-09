import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-clear-scan',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-dialog-clear-scan.component.html',
  styleUrl: './confirmation-dialog-clear-scan.component.css'
})
export class ConfirmationDialogClearScanComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogClearScanComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
