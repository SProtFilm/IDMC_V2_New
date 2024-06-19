import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateByTypeGComponent } from '../create-by-type-g/create-by-type-g.component';

@Component({
  selector: 'app-add-documents',
  standalone: true,
  imports: [],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.css'
})
export class AddDocumentsComponent {
  constructor(public dialogRef: MatDialogRef<CreateByTypeGComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
