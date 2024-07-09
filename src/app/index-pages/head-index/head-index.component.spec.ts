import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadIndexComponent } from './head-index.component';

describe('HeadIndexComponent', () => {
  let component: HeadIndexComponent;
  let fixture: ComponentFixture<HeadIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
