import { Component} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { AddDocumentsComponent } from '../add-documents/add-documents.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-by-case',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule
  ],
  templateUrl: './create-by-case.component.html',
  styleUrl: './create-by-case.component.css'
})
export class CreateByCaseComponent {

  constructor(public dialog: MatDialog) {}

  openAddDocDialog() {
    const dialogRef = this.dialog.open(AddDocumentsComponent, {
      width: '75%',
      height: 'auto%',
      autoFocus: false,
      disableClose: true // Optional: Set to true if you want to prevent closing the dialog by clicking outside or pressing Escape key
    });
}
}