import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAnimalAdoptionComponent } from './register-animal-adoption.component';

describe('RegisterAnimalAdoptionComponent', () => {
  let component: RegisterAnimalAdoptionComponent;
  let fixture: ComponentFixture<RegisterAnimalAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAnimalAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAnimalAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
