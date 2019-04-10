import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReferenceComponent } from './person-reference.component';

describe('PersonReferenceComponent', () => {
  let component: PersonReferenceComponent;
  let fixture: ComponentFixture<PersonReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
