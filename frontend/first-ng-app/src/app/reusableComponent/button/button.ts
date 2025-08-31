import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Clientclass } from '../../model/class/Client';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styles: ``
})
export class Button {

  @Input() btnText: string = ""
  @Input() btnClass: string = ""  

  @Output() onBtnClick = new EventEmitter<Clientclass | string>()

  onClick(){
    this.onBtnClick.emit('Hello World')
  }
}
