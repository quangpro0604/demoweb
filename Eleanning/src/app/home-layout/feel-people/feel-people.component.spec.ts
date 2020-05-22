import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelPeopleComponent } from './feel-people.component';

describe('FeelPeopleComponent', () => {
  let component: FeelPeopleComponent;
  let fixture: ComponentFixture<FeelPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
