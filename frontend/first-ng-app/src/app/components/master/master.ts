import { Component } from '@angular/core';
import { Roles } from '../roles/roles';
import { Designation } from '../designation/designation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [Roles, Designation, CommonModule],
  templateUrl:'./master.html',
  styles: ``
})
export class Master {

  currentComponent: string = 'roles';

  changeComponent(msg: string): string {
    this.currentComponent = msg;
    return this.currentComponent;
  }
}
