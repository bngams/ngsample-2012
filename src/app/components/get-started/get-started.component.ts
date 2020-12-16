import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SOME_CONST } from '../layout/header.component';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  @Input()
  title = ''; // main goal: get value from other component

  @Input()
  subtitle = '';

  @Input()
  objectTitle: any;

  @Output()
  myCustomEvent = new EventEmitter<string>(); // create an event

  const = SOME_CONST;
  imgUrl = 'https://via.placeholder.com/150';
  isDisabled = true;
  logoColor = 'blue';
  today = new Date();
  classes = { first: this.isDisabled, second: this.isDisabled, third: !this.isDisabled };
  fruits: string[] = ['banana', 'apple', 'cherry'];

  constructor() { }

  ngOnInit(): void {
  }

  toggleButton(): void {
    this.isDisabled = !this.isDisabled;
    // trigger event
    this.myCustomEvent.emit('event value');
  }



}
