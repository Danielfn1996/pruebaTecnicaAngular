import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPstComponent } from './formulario-pst.component';

describe('FormularioPstComponent', () => {
  let component: FormularioPstComponent;
  let fixture: ComponentFixture<FormularioPstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPstComponent]
    });
    fixture = TestBed.createComponent(FormularioPstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
