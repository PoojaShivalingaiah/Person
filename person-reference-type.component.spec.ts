import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReferenceTypeComponent } from './person-reference-type.component';

describe('PersonReferenceTypeComponent', () => {
  let component: PersonReferenceTypeComponent;
  let fixture: ComponentFixture<PersonReferenceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonReferenceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonReferenceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
