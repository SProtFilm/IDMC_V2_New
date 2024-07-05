import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogAddMoreComponent } from './confirmation-dialog-add-more.component';

describe('ConfirmationDialogAddMoreComponent', () => {
  let component: ConfirmationDialogAddMoreComponent;
  let fixture: ComponentFixture<ConfirmationDialogAddMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmationDialogAddMoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationDialogAddMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
