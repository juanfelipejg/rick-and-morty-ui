import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  @Output() loginForm = new EventEmitter();
  
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  submit(){
    this.loginForm.emit(this.login.value);
  }

}
