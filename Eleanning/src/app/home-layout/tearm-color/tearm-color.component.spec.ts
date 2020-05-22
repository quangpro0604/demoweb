import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TearmColorComponent } from './tearm-color.component';

describe('TearmColorComponent', () => {
  let component: TearmColorComponent;
  let fixture: ComponentFixture<TearmColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TearmColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TearmColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
