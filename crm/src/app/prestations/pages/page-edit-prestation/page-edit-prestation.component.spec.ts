import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditPrestationComponent } from './page-edit-prestation.component';

describe('PageEditPrestationComponent', () => {
  let component: PageEditPrestationComponent;
  let fixture: ComponentFixture<PageEditPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
