import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // balise, html tag
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-ngapp';
  imgUrl = 'https://via.placeholder.com/150';
  isDisabled = true;
  logoColor = 'blue';
  today = new Date();
  classes = { first: this.isDisabled, second: this.isDisabled, third: !this.isDisabled };
  fruits: string[] = ['banana', 'apple', 'cherry'];

  toggleButton(): void {
    this.isDisabled = !this.isDisabled;
  }
}
