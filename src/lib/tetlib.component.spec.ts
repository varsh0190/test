import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetlibComponent } from './tetlib.component';

describe('TetlibComponent', () => {
  let component: TetlibComponent;
  let fixture: ComponentFixture<TetlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
