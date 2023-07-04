import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationsComponent } from './form-validations.component';

describe('FormValidationsComponent', () => {
  let component: FormValidationsComponent;
  let fixture: ComponentFixture<FormValidationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormValidationsComponent]
    });
    fixture = TestBed.createComponent(FormValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
