import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAnimalLostComponent } from './register-animal-lost.component';

describe('RegisterAnimalLostComponent', () => {
  let component: RegisterAnimalLostComponent;
  let fixture: ComponentFixture<RegisterAnimalLostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAnimalLostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAnimalLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
