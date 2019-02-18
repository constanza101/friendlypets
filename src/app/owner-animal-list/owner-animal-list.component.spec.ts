import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAnimalListComponent } from './owner-animal-list.component';

describe('OwnerAnimalListComponent', () => {
  let component: OwnerAnimalListComponent;
  let fixture: ComponentFixture<OwnerAnimalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAnimalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
