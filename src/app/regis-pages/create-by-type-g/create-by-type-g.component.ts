import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-by-type-g',
  standalone: true,
  imports: [],
  templateUrl: './create-by-type-g.component.html',
  styleUrl: './create-by-type-g.component.css'
})
export class CreateByTypeGComponent {
  
  constructor(public dialogRef: MatDialogRef<CreateByTypeGComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
