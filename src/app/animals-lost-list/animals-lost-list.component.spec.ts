import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsLostListComponent } from './animals-lost-list.component';

describe('AnimalsLostListComponent', () => {
  let component: AnimalsLostListComponent;
  let fixture: ComponentFixture<AnimalsLostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsLostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsLostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
