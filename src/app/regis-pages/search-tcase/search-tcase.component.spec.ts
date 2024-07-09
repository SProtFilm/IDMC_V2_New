import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTcaseComponent } from './search-tcase.component';

describe('SearchTcaseComponent', () => {
  let component: SearchTcaseComponent;
  let fixture: ComponentFixture<SearchTcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchTcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
