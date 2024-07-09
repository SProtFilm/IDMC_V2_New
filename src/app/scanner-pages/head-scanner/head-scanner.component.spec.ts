import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadScannerComponent } from './head-scanner.component';

describe('HeadScannerComponent', () => {
  let component: HeadScannerComponent;
  let fixture: ComponentFixture<HeadScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadScannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
