import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { BatchIdService } from '../../service/batch-id.service';
import { MatCardModule } from '@angular/material/card';
import { BatchDialogComponent } from '../../batch-dialog/batch-dialog.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InfoCaseComponent } from '../info-case/info-case.component';

@Component({
  selector: 'app-info-batch',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    InfoCaseComponent
  ],
  templateUrl: './info-batch.component.html',
  styleUrls: ['./info-batch.component.css']
})
export class InfoBatchComponent implements OnInit, OnDestroy {
  batchIdControl = new FormControl('');
  private destroy$ = new Subject<void>();

  constructor(private batchIdService: BatchIdService, private dialog: MatDialog) {}

  ngOnInit() {
    this.batchIdService.batchId$
      .pipe(takeUntil(this.destroy$))
      .subscribe(batchId => {
        this.batchIdControl.setValue(batchId);
      });
  }

  ngOnDestroy() {
    // Complete the destroy$ subject to clean up subscriptions
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAcceptBatch(): void {
    const batchId = this.batchIdControl.value;
    const dialogRef = this.dialog.open(BatchDialogComponent, {
      data: { message: `Batch ID: ${batchId}` }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
