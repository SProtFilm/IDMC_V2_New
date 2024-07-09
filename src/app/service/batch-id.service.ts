// src/app/batch-id.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatchIdService {
  private runningNumberKey = 'runningNumber';
  private currentDateKey = 'currentDate';
  private batchIdSubject = new BehaviorSubject<string>('');
  public batchId$ = this.batchIdSubject.asObservable();

  constructor() {}

  generateBatchId(departmentNumber: string): void {
    const date = new Date();
    const yy = date.getFullYear().toString().slice(-2);
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const dd = date.getDate().toString().padStart(2, '0');
    const dateString = yy + mm + dd;

    let runningNumber = this.getRunningNumber(dateString);

    const batchId = `${departmentNumber}${dateString}${runningNumber}`;
    this.batchIdSubject.next(batchId);
  }

  private getRunningNumber(dateString: string): string {
    let currentStoredDate = localStorage.getItem(this.currentDateKey);
    let runningNumber = 1;

    if (currentStoredDate === dateString) {
      const storedRunningNumber = localStorage.getItem(this.runningNumberKey);
      runningNumber = storedRunningNumber ? parseInt(storedRunningNumber, 10) + 1 : 1;
    }

    localStorage.setItem(this.runningNumberKey, runningNumber.toString().padStart(4, '0'));
    localStorage.setItem(this.currentDateKey, dateString);

    return runningNumber.toString().padStart(4, '0');
  }
}
