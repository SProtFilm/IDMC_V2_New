import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tbatch-info',
  standalone: true,
  imports: [],
  templateUrl: './tbatch-info.component.html',
  styleUrl: './tbatch-info.component.css'
})
export class TbatchInfoComponent {
  
  constructor(public dialogRef: MatDialogRef<TbatchInfoComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
