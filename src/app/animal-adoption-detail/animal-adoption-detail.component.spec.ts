import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAdoptionDetailComponent } from './animal-adoption-detail.component';

describe('AnimalAdoptionDetailComponent', () => {
  let component: AnimalAdoptionDetailComponent;
  let fixture: ComponentFixture<AnimalAdoptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalAdoptionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAdoptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
