import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl:'./roles.html',
  styles: ``
})
export class Roles {

  firstName :string = 'John';
  lastName :string = 'Doe';

  getAlert(): void {
    alert(`Hello ${this.firstName} ${this.lastName}`);
  }

}
