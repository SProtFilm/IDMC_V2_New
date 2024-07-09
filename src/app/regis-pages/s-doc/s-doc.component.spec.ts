import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDocComponent } from './s-doc.component';

describe('SDocComponent', () => {
  let component: SDocComponent;
  let fixture: ComponentFixture<SDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
