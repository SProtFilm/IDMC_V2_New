import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRemarkComponent } from './history-remark.component';

describe('HistoryRemarkComponent', () => {
  let component: HistoryRemarkComponent;
  let fixture: ComponentFixture<HistoryRemarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryRemarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryRemarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
