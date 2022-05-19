import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrunkComponent } from './drunk.component';

describe('DrunkComponent', () => {
  let component: DrunkComponent;
  let fixture: ComponentFixture<DrunkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrunkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
