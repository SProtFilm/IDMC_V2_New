import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-stop-scan',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-dialog-stop-scan.component.html',
  styleUrl: './confirmation-dialog-stop-scan.component.css'
})
export class ConfirmationDialogStopScanComponent {
  
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogStopScanComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
