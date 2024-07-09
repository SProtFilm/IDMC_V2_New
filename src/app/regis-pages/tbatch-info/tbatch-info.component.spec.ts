import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbatchInfoComponent } from './tbatch-info.component';

describe('TbatchInfoComponent', () => {
  let component: TbatchInfoComponent;
  let fixture: ComponentFixture<TbatchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TbatchInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TbatchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
