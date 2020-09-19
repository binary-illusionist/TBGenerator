import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDiagComponent } from './save-diag.component';

describe('SaveDiagComponent', () => {
  let component: SaveDiagComponent;
  let fixture: ComponentFixture<SaveDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
