import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerSystemComponent } from './scanner-system.component';

describe('ScannerSystemComponent', () => {
  let component: ScannerSystemComponent;
  let fixture: ComponentFixture<ScannerSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScannerSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScannerSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
