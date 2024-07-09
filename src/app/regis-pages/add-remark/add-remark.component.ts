import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-remark',
  standalone: true,
  imports: [],
  templateUrl: './add-remark.component.html',
  styleUrl: './add-remark.component.css'
})
export class AddRemarkComponent {

  constructor(public dialogRef: MatDialogRef<AddRemarkComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

}
