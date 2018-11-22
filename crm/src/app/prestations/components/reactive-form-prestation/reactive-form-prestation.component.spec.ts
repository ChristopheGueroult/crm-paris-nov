import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPrestationComponent } from './reactive-form-prestation.component';

describe('ReactiveFormPrestationComponent', () => {
  let component: ReactiveFormPrestationComponent;
  let fixture: ComponentFixture<ReactiveFormPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
