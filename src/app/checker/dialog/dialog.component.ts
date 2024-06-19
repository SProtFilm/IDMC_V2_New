import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(private dialog: MatDialog) {}

  openClose(): void {
    this.dialog.closeAll();
  }
  copycaseinfopast(): void{

  }
}
