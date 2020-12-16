import { Component, OnInit } from '@angular/core';

// modules JS
// export <=> public
// import { SOME_CONST } from '.../header.component'
export const SOME_CONST = 'public';
const PRIVATE_CONST = 'private';

@Component({
  selector: 'app-header',
  template: `
    <p>
      header works!
    </p>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  // const CLASS_CONST = 'test';

  // const usage
  const = SOME_CONST;

  // DI
  constructor() { }

  // lifecycle hook
  ngOnInit(): void {
  }

}
