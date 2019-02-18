import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCommentsComponent } from './place-comments.component';

describe('PlaceCommentsComponent', () => {
  let component: PlaceCommentsComponent;
  let fixture: ComponentFixture<PlaceCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
