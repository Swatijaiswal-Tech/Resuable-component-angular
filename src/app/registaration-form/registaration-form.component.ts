import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registaration-form',
  templateUrl: './registaration-form.component.html',
  styleUrls: ['./registaration-form.component.scss']
})
export class RegistarationFormComponent implements OnInit {
  public regForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createRegistationForm();
  }

  createRegistationForm(): void {
    this.regForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.maxLength]],
      phoneNumber: ['', [Validators.required, Validators.maxLength]],
      email: ['', [Validators.required, Validators.maxLength]],
      password: ['', [Validators.required, Validators.maxLength]],
      confirmPassword: ['', [Validators.required]],
      desciption: ['', [Validators.maxLength]],

    });
  }

  public getMessage(form: FormGroup, controlName: string): string {
    if (controlName === 'fullName') {
      return (form.get(controlName).hasError('required') ? 'Please Enter Fullname' : ' ' || form.get(controlName).hasError('maxLength') ? 'Please required length' : '');
    }
    if (controlName === 'email') {
      return (form.get(controlName).hasError('required') ? 'Please Enter Email' : ' ' || form.get(controlName).hasError('maxLength') ? 'Please required length' : '');
    }
    if (controlName === 'phoneNumber') {
      return (form.get(controlName).hasError('required') ? 'Please Enter phone number' : ' '
        || form.get(controlName).hasError('maxLength') ? 'Please EnterName' : '');
    }
    if (controlName === 'desciption') {
      return form.get(controlName).hasError('maxLength') ? 'Please required length' : '';
    }
    if (controlName === 'password') {
      return (form.get(controlName).hasError('required') ? 'Please Enter Password' : ' ' || form.get(controlName).hasError('maxLength') ? 'Please required length' : '');
    }
  }
  onSubmit(): void {
    console.log('registration', this.regForm.value);
  }

}
