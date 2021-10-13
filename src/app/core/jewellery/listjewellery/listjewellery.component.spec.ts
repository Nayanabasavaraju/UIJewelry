import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListJewelleryComponent } from './listjewellery.component';

describe('ListJewelleryComponent', () => {
  let component: ListJewelleryComponent;
  let fixture: ComponentFixture<ListJewelleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListJewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
