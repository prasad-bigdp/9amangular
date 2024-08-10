import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeComponent } from './receipe.component';

describe('ReceipeComponent', () => {
  let component: ReceipeComponent;
  let fixture: ComponentFixture<ReceipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
