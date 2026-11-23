import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionForm } from './connexion-form';

describe('ConnexionForm', () => {
  let component: ConnexionForm;
  let fixture: ComponentFixture<ConnexionForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
