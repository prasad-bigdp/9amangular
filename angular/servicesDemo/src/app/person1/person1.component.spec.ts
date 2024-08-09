import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person1Component } from './person1.component';

describe('Person1Component', () => {
  let component: Person1Component;
  let fixture: ComponentFixture<Person1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Person1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Person1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
