import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrestationsComponent } from './page-prestations.component';

describe('PagePrestationsComponent', () => {
  let component: PagePrestationsComponent;
  let fixture: ComponentFixture<PagePrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
