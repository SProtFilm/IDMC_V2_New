import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addremark-scanner',
  standalone: true,
  imports: [],
  templateUrl: './addremark-scanner.component.html',
  styleUrl: './addremark-scanner.component.css'
})
export class AddremarkScannerComponent {
  constructor(public dialogRef: MatDialogRef<AddremarkScannerComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
