import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { BatchIdService } from '../../service/batch-id.service';
import { BatchDialogModule } from '../../batch-dialog/batch-dialog.module';
import { BatchDialogComponent } from '../../batch-dialog/batch-dialog.component';
import { ViewBatchComponent } from '../view-batch/view-batch.component';

@Component({
  selector: 'app-head-regis',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    BatchDialogModule,
    MatSelectModule
  ],
  templateUrl: './head-regis.component.html',
  styleUrls: ['./head-regis.component.css']
})
export class HeadRegisComponent implements OnInit {

  @Output() dialogOpen = new EventEmitter<boolean>();

  constructor(
    private batchIdService: BatchIdService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.batchIdService.batchId$.subscribe(batchId => {
      if (batchId) {
        this.openDialog(`Batch ID generated: ${batchId}`);
      }
    });
  }

  generateBatchId() {
    const departmentNumber = '1234'; // Example department number
    this.batchIdService.generateBatchId(departmentNumber);
  }

  openDialog(message: string) {
    this.dialog.open(BatchDialogComponent, {
      data: { message }
    });
  }

  openViewBatchDialog() {
    this.dialogOpen.emit(true);
    const dialogRef = this.dialog.open(ViewBatchComponent, {
      width: '30%',
      height: 'auto',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      disableClose: true
    });
}
}
