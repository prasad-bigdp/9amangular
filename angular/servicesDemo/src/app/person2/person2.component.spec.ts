import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Person2Component } from './person2.component';

describe('Person2Component', () => {
  let component: Person2Component;
  let fixture: ComponentFixture<Person2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Person2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Person2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
