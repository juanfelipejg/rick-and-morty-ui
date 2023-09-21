import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  @Output() clickEvent = new EventEmitter()
  
  login(){
    console.log('hola mundo')
    this.clickEvent.emit()
  }
}