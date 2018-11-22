import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrestationComponent } from './form-prestation.component';

describe('FormPrestationComponent', () => {
  let component: FormPrestationComponent;
  let fixture: ComponentFixture<FormPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
