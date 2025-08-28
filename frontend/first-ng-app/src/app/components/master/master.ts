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

  currentIsRoles: boolean = true;

  changeComponent(): boolean {
    this.currentIsRoles = !this.currentIsRoles;
    return !this.currentIsRoles;
  }
}
