import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBatchComponent } from './info-batch.component';

describe('InfoBatchComponent', () => {
  let component: InfoBatchComponent;
  let fixture: ComponentFixture<InfoBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoBatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
