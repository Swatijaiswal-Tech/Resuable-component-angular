import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  templateUrl: './shared-input.component.html',
  styleUrls: ['./shared-input.component.scss']
})
export class SharedInputComponent {
  @Input() parentForm: FormGroup;
  @Input() controlName: string;
  @Input() placeholder: '';
  @Input() type: 'text';
  @Input() maxLength: number;
  @Input() isTextArea = false;
  @Input() getMessage: (form: FormGroup, controlName: string) => string;

  constructor() { }


}
