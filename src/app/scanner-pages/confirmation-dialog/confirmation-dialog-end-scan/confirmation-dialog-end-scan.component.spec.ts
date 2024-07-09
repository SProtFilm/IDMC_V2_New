import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogEndScanComponent } from './confirmation-dialog-end-scan.component';

describe('ConfirmationDialogEndScanComponent', () => {
  let component: ConfirmationDialogEndScanComponent;
  let fixture: ComponentFixture<ConfirmationDialogEndScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialogEndScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationDialogEndScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
