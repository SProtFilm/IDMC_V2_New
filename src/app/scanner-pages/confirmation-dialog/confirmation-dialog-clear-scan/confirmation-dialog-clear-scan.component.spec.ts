import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogClearScanComponent } from './confirmation-dialog-clear-scan.component';

describe('ConfirmationDialogClearScanComponent', () => {
  let component: ConfirmationDialogClearScanComponent;
  let fixture: ComponentFixture<ConfirmationDialogClearScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialogClearScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationDialogClearScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
