import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonJdDetailsComponent } from './person-jd-details.component';

describe('PersonJdDetailsComponent', () => {
  let component: PersonJdDetailsComponent;
  let fixture: ComponentFixture<PersonJdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonJdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonJdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
