import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() title: string;
  @Output() clickEvent = new EventEmitter();

  click() {
    this.clickEvent.emit();
  }
}