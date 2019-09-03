import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySpecialOffersComponent } from './monthly-special-offers.component';

describe('MonthlySpecialOffersComponent', () => {
  let component: MonthlySpecialOffersComponent;
  let fixture: ComponentFixture<MonthlySpecialOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlySpecialOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySpecialOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
