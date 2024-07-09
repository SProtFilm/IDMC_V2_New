import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanIndexSystemComponent } from './scan-index-system.component';

describe('ScanIndexSystemComponent', () => {
  let component: ScanIndexSystemComponent;
  let fixture: ComponentFixture<ScanIndexSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanIndexSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScanIndexSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
