import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceListItemComponent } from './reference-list-item.component';

describe('ReferenceListItemComponent', () => {
  let component: ReferenceListItemComponent;
  let fixture: ComponentFixture<ReferenceListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
