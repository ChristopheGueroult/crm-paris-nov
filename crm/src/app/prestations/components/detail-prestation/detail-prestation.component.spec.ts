import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPrestationComponent } from './detail-prestation.component';

describe('DetailPrestationComponent', () => {
  let component: DetailPrestationComponent;
  let fixture: ComponentFixture<DetailPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
