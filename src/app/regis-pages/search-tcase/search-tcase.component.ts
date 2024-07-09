import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { SCaseInfoComponent } from '../s-case-info/s-case-info.component';
import { SDocComponent } from '../s-doc/s-doc.component';
import { SelectionListComponent } from '../selection-list/selection-list.component';
import { SelectedListComponent } from '../selected-list/selected-list.component';

@Component({
  selector: 'app-search-tcase',
  standalone: true,
  imports: [MatGridListModule,
    SCaseInfoComponent,
    SDocComponent,
    SelectionListComponent,
    SelectedListComponent
  ],
  templateUrl: './search-tcase.component.html',
  styleUrl: './search-tcase.component.css'
})
export class SearchTcaseComponent {
  constructor(public dialogRef: MatDialogRef<SearchTcaseComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
