import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDiagComponent } from './open-diag.component';

describe('OpenDiagComponent', () => {
  let component: OpenDiagComponent;
  let fixture: ComponentFixture<OpenDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
