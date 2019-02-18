import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAnimalFoundComponent } from './register-animal-found.component';

describe('RegisterAnimalFoundComponent', () => {
  let component: RegisterAnimalFoundComponent;
  let fixture: ComponentFixture<RegisterAnimalFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAnimalFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAnimalFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
