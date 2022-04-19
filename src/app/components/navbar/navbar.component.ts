import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show: boolean;
  menu: Array<MenuItem> = [];

  constructor() {
    this.show = false;
  }

  ngOnInit() {
    this.menu = [
      {
        text: 'about',
        url: 'about',
        icon: 'postcard-fill'
      },
      {
        text: 'skills',
        url: 'skills',
        icon: 'lightning-charge-fill'
      },
      {
        text: 'contact',
        url: 'contact',
        icon: 'envelope-fill'
      }
    ];
  }

}
