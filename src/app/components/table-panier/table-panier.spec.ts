import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePanier } from './table-panier';

describe('TablePanier', () => {
  let component: TablePanier;
  let fixture: ComponentFixture<TablePanier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePanier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePanier);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
