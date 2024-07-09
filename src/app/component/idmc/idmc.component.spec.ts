import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdmcComponent } from './idmc.component';

describe('IdmcComponent', () => {
  let component: IdmcComponent;
  let fixture: ComponentFixture<IdmcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdmcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
