import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // balise, html tag
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'sample-ngapp';

  handleEvent(value: string): void {
    console.log('event called');
  }
}
