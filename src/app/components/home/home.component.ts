import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // DI
  // <portee> nom de l'attribut <Type>
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.get().subscribe...
    const param = this.route.snapshot.paramMap.get('param');
    console.log('use home param', param);
  }

}
