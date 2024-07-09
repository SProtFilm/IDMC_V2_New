import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-history-remark',
  standalone: true,
  imports: [],
  templateUrl: './history-remark.component.html',
  styleUrl: './history-remark.component.css'
})
export class HistoryRemarkComponent {

  constructor(public dialogRef: MatDialogRef<HistoryRemarkComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
  
}
