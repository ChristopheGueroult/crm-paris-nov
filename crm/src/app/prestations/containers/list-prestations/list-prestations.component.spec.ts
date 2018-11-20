import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrestationsComponent } from './list-prestations.component';

describe('ListPrestationsComponent', () => {
  let component: ListPrestationsComponent;
  let fixture: ComponentFixture<ListPrestationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPrestationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrestationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
