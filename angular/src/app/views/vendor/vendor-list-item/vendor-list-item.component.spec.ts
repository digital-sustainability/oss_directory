import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorListItemComponent } from './vendor-list-item.component';

describe('VendorListItemComponent', () => {
  let component: VendorListItemComponent;
  let fixture: ComponentFixture<VendorListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
