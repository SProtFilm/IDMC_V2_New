import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-selection-list',
  standalone: true,
  imports: [
    CommonModule,  // Import CommonModule for *ngFor and other common directives
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    DragDropModule
  ],
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionListComponent {
  // Sample data to display in the table
  items = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    selected: false,
    docSource: 'xxxxxxxxxxxxxxxxxx',
    alNo: 'xxxxxxxxxxxxxxxxxx',
    acNo: 'xxxxxxxxxxxxxxxxxx',
    dailyJournal: 'xxxxxxxxxxxxxxxxxx',
    lgNo: 'xxxxxxxxxxxxxxxxxx',
    standbyLCNo: 'xxxxxxxxxxxxxxxxxx',
    teletradeNo: 'xxxxxxxxxxxxxxxxxx'
  }));

  selectAll() {
    this.items.forEach(item => item.selected = true);
  }

  unselectAll() {
    this.items.forEach(item => item.selected = false);
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
