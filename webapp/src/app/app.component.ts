import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {

  title(title: any): string{
    return "webapp";
  }

 constructor() {}

ngOnInit(): void {

}
cart: Cart = { items: [] };

}
