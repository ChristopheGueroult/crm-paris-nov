import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientsComponent } from './page-clients.component';

describe('PageClientsComponent', () => {
  let component: PageClientsComponent;
  let fixture: ComponentFixture<PageClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
