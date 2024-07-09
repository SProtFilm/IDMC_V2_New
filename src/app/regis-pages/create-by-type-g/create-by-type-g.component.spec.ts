import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateByTypeGComponent } from './create-by-type-g.component';

describe('CreateByTypeGComponent', () => {
  let component: CreateByTypeGComponent;
  let fixture: ComponentFixture<CreateByTypeGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateByTypeGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateByTypeGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
