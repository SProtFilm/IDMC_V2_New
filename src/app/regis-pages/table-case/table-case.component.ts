import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AddRemarkComponent } from '../add-remark/add-remark.component';
import { MatDialog } from '@angular/material/dialog';
import { HistoryRemarkComponent } from '../history-remark/history-remark.component';
import { CopyReplaceComponent } from '../copy-replace/copy-replace.component';
import { TbatchInfoComponent } from '../tbatch-info/tbatch-info.component';
import { SearchTcaseComponent } from '../search-tcase/search-tcase.component';

interface Document {
  id: number;
  docCode: string;
  docNameEn: string;
  docNameTh: string;
  docSource: string;  // Add docSource property
  room: string;
  pages: number;
  selected: boolean;  // Add selected property
}

@Component({
  selector: 'app-table-case',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCheckboxModule, FormsModule],
  templateUrl: './table-case.component.html',
  styleUrls: ['./table-case.component.css']
})
export class TableCaseComponent {
  @Output() dialogOpen = new EventEmitter<boolean>();

  cases: Document[] = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    docCode: 'xxxx',
    docNameEn: 'Lorem Ipsum',
    docNameTh: 'ลอเร็ม อิพซัม',
    docSource: 'Paper',  
    room: 'F',
    pages: 4,
    selected: false  // Initialize selected to false
  }));

  currentPage = 1;
  itemsPerPage = 5;
  totalPages = Math.ceil(this.cases.length / this.itemsPerPage);

  constructor(public dialog: MatDialog) {}

  openAddRemarkDialog() {
    this.dialogOpen.emit(true);
    const dialogRef = this.dialog.open(AddRemarkComponent, {
      width: '75%',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpen.emit(false);
      console.log('The dialog was closed');
    });
  }

  openHistoryRemarkDialog() {
    this.dialogOpen.emit(true);
    const dialogRef = this.dialog.open(HistoryRemarkComponent, {
      width: '75%',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpen.emit(false);
      console.log('The dialog was closed');
    });
  }

  openCopyReplaceDialog() {
    this.dialogOpen.emit(true);
    const dialogRef = this.dialog.open(CopyReplaceComponent, {
      width: '75%',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpen.emit(false);
      console.log('The dialog was closed');
    });
  }

  openTbatchInfo() {
    this.dialogOpen.emit(true);
    const dialogRef = this.dialog.open(TbatchInfoComponent, {
      width: '75%',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpen.emit(false);
      console.log('The dialog was closed');
    });
  }

  opensearchTcase() {
    this.dialogOpen.emit(true);
    const dialogRef = this.dialog.open(SearchTcaseComponent, {
      width: '75%',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpen.emit(false);
      console.log('The dialog was closed');
    });
  }

  get paginatedCases() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cases.slice(startIndex, startIndex + this.itemsPerPage);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  selectAll() {
    this.paginatedCases.forEach(caseItem => caseItem.selected = true);
  }

  unselectAll() {
    this.paginatedCases.forEach(caseItem => caseItem.selected = false);
  }
}
