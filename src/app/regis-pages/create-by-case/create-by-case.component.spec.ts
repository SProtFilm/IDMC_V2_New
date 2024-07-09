import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateByCaseComponent } from './create-by-case.component';

describe('CreateByCaseComponent', () => {
  let component: CreateByCaseComponent;
  let fixture: ComponentFixture<CreateByCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateByCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateByCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
