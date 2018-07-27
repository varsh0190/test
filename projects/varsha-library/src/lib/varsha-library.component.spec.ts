import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VarshaLibraryComponent } from './varsha-library.component';

describe('VarshaLibraryComponent', () => {
  let component: VarshaLibraryComponent;
  let fixture: ComponentFixture<VarshaLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VarshaLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VarshaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
