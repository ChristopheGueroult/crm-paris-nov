import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationComponent } from './prestation.component';

describe('PrestationComponent', () => {
  let component: PrestationComponent;
  let fixture: ComponentFixture<PrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
