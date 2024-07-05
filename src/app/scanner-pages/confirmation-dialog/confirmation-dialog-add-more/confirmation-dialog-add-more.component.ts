// confirmation-dialog-add-more.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-add-more',
  templateUrl: './confirmation-dialog-add-more.component.html',
  styleUrls: ['./confirmation-dialog-add-more.component.css']
})
export class ConfirmationDialogAddMoreComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialogAddMoreComponent>) {}

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}