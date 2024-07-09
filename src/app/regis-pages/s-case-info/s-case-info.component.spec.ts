import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCaseInfoComponent } from './s-case-info.component';

describe('SCaseInfoComponent', () => {
  let component: SCaseInfoComponent;
  let fixture: ComponentFixture<SCaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCaseInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SCaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
