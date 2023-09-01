import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPutComponent } from './formulario-put.component';

describe('FormularioPutComponent', () => {
  let component: FormularioPutComponent;
  let fixture: ComponentFixture<FormularioPutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPutComponent]
    });
    fixture = TestBed.createComponent(FormularioPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
