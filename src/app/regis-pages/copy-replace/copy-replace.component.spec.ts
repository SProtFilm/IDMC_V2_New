import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyReplaceComponent } from './copy-replace.component';

describe('CopyReplaceComponent', () => {
  let component: CopyReplaceComponent;
  let fixture: ComponentFixture<CopyReplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyReplaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
