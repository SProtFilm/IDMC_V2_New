import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateByTypeComponent } from './create-by-type.component';

describe('CreateByTypeComponent', () => {
  let component: CreateByTypeComponent;
  let fixture: ComponentFixture<CreateByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateByTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
