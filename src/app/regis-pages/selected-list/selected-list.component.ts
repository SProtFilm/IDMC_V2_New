import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-selected-list',
  standalone: true,
  imports: [    
  CommonModule,  // Import CommonModule for *ngFor and other common directives
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  FormsModule,
  DragDropModule],
  templateUrl: './selected-list.component.html',
  styleUrl: './selected-list.component.css'
})
export class SelectedListComponent {
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

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
