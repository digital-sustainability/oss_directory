import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssDetailViewComponent } from './oss-detail-view.component';

describe('OssDetailViewComponent', () => {
  let component: OssDetailViewComponent;
  let fixture: ComponentFixture<OssDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
