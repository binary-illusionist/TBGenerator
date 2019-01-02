import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbPreviewComponent } from './tb-preview.component';

describe('TbPreviewComponent', () => {
  let component: TbPreviewComponent;
  let fixture: ComponentFixture<TbPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
