import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickToolbarComponent } from './slick-toolbar.component';

describe('SlickToolbarComponent', () => {
  let component: SlickToolbarComponent;
  let fixture: ComponentFixture<SlickToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlickToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
