import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdivisionComponent } from './viewdivision.component';

describe('ViewdivisionComponent', () => {
  let component: ViewdivisionComponent;
  let fixture: ComponentFixture<ViewdivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewdivisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
