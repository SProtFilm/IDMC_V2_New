import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScannerComponent } from './display-scanner.component';

describe('DisplayScannerComponent', () => {
  let component: DisplayScannerComponent;
  let fixture: ComponentFixture<DisplayScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayScannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
