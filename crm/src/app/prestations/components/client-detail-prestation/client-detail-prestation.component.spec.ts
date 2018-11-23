import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailPrestationComponent } from './client-detail-prestation.component';

describe('ClientDetailPrestationComponent', () => {
  let component: ClientDetailPrestationComponent;
  let fixture: ComponentFixture<ClientDetailPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
