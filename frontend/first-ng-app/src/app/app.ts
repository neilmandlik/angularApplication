import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
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
