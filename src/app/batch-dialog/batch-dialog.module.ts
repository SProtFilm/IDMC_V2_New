// src/app/batch-dialog/batch-dialog.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BatchDialogComponent } from './batch-dialog.component';

@NgModule({
  declarations: [BatchDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [BatchDialogComponent]
})
export class BatchDialogModule {}
