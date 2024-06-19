import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCaseComponent } from './info-case.component';

describe('InfoCaseComponent', () => {
  let component: InfoCaseComponent;
  let fixture: ComponentFixture<InfoCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
