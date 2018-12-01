import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssChangeEntryComponent } from './oss-change-entry.component';

describe('OssChangeEntryComponent', () => {
  let component: OssChangeEntryComponent;
  let fixture: ComponentFixture<OssChangeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssChangeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssChangeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
