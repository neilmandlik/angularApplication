import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Master } from './components/master/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Master, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
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
