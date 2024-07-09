import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddRemarkComponent } from '../add-remark/add-remark.component';


@Component({
  selector: 'app-view-batch',
  standalone: true,
  imports: [],
  templateUrl: './view-batch.component.html',
  styleUrl: './view-batch.component.css'
})
export class ViewBatchComponent {
  constructor(public dialogRef: MatDialogRef<AddRemarkComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
