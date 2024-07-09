import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoucumentListIndexComponent } from './doucument-list-index.component';

describe('DoucumentListIndexComponent', () => {
  let component: DoucumentListIndexComponent;
  let fixture: ComponentFixture<DoucumentListIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoucumentListIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoucumentListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
