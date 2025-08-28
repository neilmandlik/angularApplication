import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Roles } from './components/roles/roles';
import { Master } from './components/master/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Master],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <p>Hello World</p>
    <app-master />
    <router-outlet />
  `,
  styles: [`
    p {
      font-family: Lato;
      background-color: lightblue;
    } 
    `],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
