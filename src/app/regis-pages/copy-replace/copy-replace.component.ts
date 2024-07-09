import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-copy-replace',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './copy-replace.component.html',
  styleUrl: './copy-replace.component.css'
})
export class CopyReplaceComponent {
  selectedLevel: string = 'document'; // Set default value to "document"

  constructor(public dialogRef: MatDialogRef<CopyReplaceComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
