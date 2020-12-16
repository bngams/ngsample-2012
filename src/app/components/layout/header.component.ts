import { Component, OnInit } from '@angular/core';

// modules JS
// export <=> public
// import { SOME_CONST } from '.../header.component'
export const SOME_CONST = 'public';
const PRIVATE_CONST = 'private';

@Component({
  selector: 'app-header',
  template: `
  <!-- color="primary" <=> [color]="angular expression" -->
    <mat-toolbar [color]="'primary'">
      <span>My Application</span>
      <ul>
        <li class="menu-item" routerLink="/home" routerLinkActive="active">Home</li>
        <li class="menu-item" routerLink="/get-started" routerLinkActive="active">Get Started</li>
        <li class="menu-item">Features</li>
      </ul>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: space-between;
    }

    .menu-item {
      list-style-type: none;
      display: inline-block;
      margin: 15px;
    }

    .menu-item:hover {
      font-weight: bolder;
    }

    .active {
      text-decoration: underline;
    }
  `]
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
