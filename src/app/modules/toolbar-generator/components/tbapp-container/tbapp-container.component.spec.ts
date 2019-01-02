import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbappContainerComponent } from './tbapp-container.component';

describe('TbappContainerComponent', () => {
  let component: TbappContainerComponent;
  let fixture: ComponentFixture<TbappContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbappContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbappContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
