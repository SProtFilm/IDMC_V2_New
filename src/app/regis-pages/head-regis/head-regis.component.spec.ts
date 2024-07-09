import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadRegisComponent } from './head-regis.component';

describe('HeadRegisComponent', () => {
  let component: HeadRegisComponent;
  let fixture: ComponentFixture<HeadRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadRegisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
