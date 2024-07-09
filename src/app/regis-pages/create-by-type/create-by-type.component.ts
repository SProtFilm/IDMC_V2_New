import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateByTypeGComponent } from '../create-by-type-g/create-by-type-g.component';

@Component({
  selector: 'app-create-by-type',
  standalone: true,
  imports: [],
  templateUrl: './create-by-type.component.html',
  styleUrl: './create-by-type.component.css'
})
export class CreateByTypeComponent {
  
  constructor(public dialog: MatDialog) {}

  openCreateByG() {
    const dialogRef = this.dialog.open(CreateByTypeGComponent, {
      width: '80%',
      height: 'auto%',
      autoFocus: false,
      disableClose: true // Optional: Set to true if you want to prevent closing the dialog by clicking outside or pressing Escape key
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // You can perform any necessary actions after the dialog is closed here
    });
  }
}
