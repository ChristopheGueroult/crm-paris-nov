import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddPrestationComponent } from './page-add-prestation.component';

describe('PageAddPrestationComponent', () => {
  let component: PageAddPrestationComponent;
  let fixture: ComponentFixture<PageAddPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAddPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
