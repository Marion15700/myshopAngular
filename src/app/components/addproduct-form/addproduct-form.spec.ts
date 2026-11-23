import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductForm } from './addproduct-form';

describe('AddproductForm', () => {
  let component: AddproductForm;
  let fixture: ComponentFixture<AddproductForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddproductForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
