import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Layout } from './components/layout/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
