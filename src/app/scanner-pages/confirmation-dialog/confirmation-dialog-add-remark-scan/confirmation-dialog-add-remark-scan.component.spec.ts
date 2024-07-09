import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogAddRemarkScanComponent } from './confirmation-dialog-add-remark-scan.component';

describe('ConfirmationDialogAddRemarkScanComponent', () => {
  let component: ConfirmationDialogAddRemarkScanComponent;
  let fixture: ComponentFixture<ConfirmationDialogAddRemarkScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialogAddRemarkScanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationDialogAddRemarkScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
