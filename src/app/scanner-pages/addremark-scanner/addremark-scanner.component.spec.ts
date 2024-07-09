import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremarkScannerComponent } from './addremark-scanner.component';

describe('AddremarkScannerComponent', () => {
  let component: AddremarkScannerComponent;
  let fixture: ComponentFixture<AddremarkScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddremarkScannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddremarkScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
