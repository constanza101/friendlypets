import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsFoundListComponent } from './animals-found-list.component';

describe('AnimalsFoundListComponent', () => {
  let component: AnimalsFoundListComponent;
  let fixture: ComponentFixture<AnimalsFoundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsFoundListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsFoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
