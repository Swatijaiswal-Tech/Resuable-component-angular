import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
       fullName: [''],
       phoneNumber: [''],
       email: [''],
       password: [''],
       confirmPassword: [''],
       desciption: [''],

     });
  }

  public getMessage(form: FormGroup , controlName: string): string {
    if (controlName === 'fullName') {
      return (form.get(controlName).hasError('required') ? 'Please Fullname' : ' ' ||  form.get(controlName).hasError('maxLength') ? 'Please EnterName' : '');
    }
    if (controlName === 'email') {
      return (form.get(controlName).hasError('required') ? 'Please Email' : ' ' ||  form.get(controlName).hasError('maxLength') ? 'Please EnterName' : '');
    }
    if (controlName === 'desciption') {
      return (form.get(controlName).hasError('required') ? 'Please Description' : ' ' ||  form.get(controlName).hasError('maxLength') ? 'Please EnterName' : '');
    }
    if (controlName === 'password') {
      return (form.get(controlName).hasError('required') ? 'Please Password' : ' ' ||  form.get(controlName).hasError('maxLength') ? 'Please EnterName' : '');
    }
  }
  onSubmit(): void {
    console.log('registration', this.regForm.value);
  }

}
