import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsAdoptionListComponent } from './animals-adoption-list.component';

describe('AnimalsAdoptionListComponent', () => {
  let component: AnimalsAdoptionListComponent;
  let fixture: ComponentFixture<AnimalsAdoptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsAdoptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsAdoptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
