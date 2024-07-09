import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
import { ShareTableDataService } from '../../service/share-table-data.service';


@Component({
  selector: 'app-table-case',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCheckboxModule, FormsModule],
  templateUrl: './table-case.component.html',
  styleUrls: ['./table-case.component.css']
})
export class TableCaseComponent implements OnInit{
  @Output() dialogOpen = new EventEmitter<boolean>();

  shareItems: any[] = []

  currentPage = 1;

  constructor(public dialog: MatDialog , private shareTableDataService : ShareTableDataService) {}

  ngOnInit(): void {
    this.updateSharedItems();
  }

  updateSharedItems(): void {
    this.shareItems = this.shareTableDataService.getSelectedItems();
  }


  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // goToNextPage() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }

  selectAll() {
    this.shareItems.forEach(shareItems => shareItems.selected = true);
  }

  unselectAll() {
    this.shareItems.forEach(shareItems => shareItems.selected = false);
  }

  removeItem(): void {
    this.shareTableDataService.removeSelectedItems(); 
    this.updateSharedItems();
  }


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
      width: '80%',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpen.emit(false);
      console.log('The dialog was closed');
    });
  }

}
