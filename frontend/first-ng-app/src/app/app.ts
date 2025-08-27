import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Roles } from './components/roles/roles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Roles],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <p>Hello World</p>
    <app-roles />
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
