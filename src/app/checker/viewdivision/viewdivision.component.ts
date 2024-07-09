import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-viewdivision',
  standalone: true,
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './viewdivision.component.html',
  styleUrl: './viewdivision.component.css'
})

export class ViewdivisionComponent {
  constructor(private dialog: MatDialog) {}

  openClose(): void {
    this.dialog.closeAll();
  }
  copycaseinfopast(): void{

  }
}
