import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemDiagComponent } from './additem-diag.component';

describe('AdditemDiagComponent', () => {
  let component: AdditemDiagComponent;
  let fixture: ComponentFixture<AdditemDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
