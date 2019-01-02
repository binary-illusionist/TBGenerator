import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportcodeDiagComponent } from './exportcode-diag.component';

describe('ExportcodeDiagComponent', () => {
  let component: ExportcodeDiagComponent;
  let fixture: ComponentFixture<ExportcodeDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportcodeDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportcodeDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});