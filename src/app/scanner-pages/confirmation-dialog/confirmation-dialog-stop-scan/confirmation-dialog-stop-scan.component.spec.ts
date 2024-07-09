import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogStopScanComponent } from './confirmation-dialog-stop-scan.component';

describe('ConfirmationDialogStopScanComponent', () => {
  let component: ConfirmationDialogStopScanComponent;
  let fixture: ComponentFixture<ConfirmationDialogStopScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialogStopScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationDialogStopScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
