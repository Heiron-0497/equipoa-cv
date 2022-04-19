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
        text: 'About',
        url: 'about',
        icon: 'person-fill'
      },
      {
        text: 'Skills',
        url: 'skills',
        icon: 'lightning-charge-fill'
      },
      {
        text: 'Education',
        url: 'education',
        icon: 'mortarboard-fill'
      },
      {
        text: 'Experience',
        url: 'experience',
        icon: 'briefcase-fill'
      },
      {
        text: 'Language',
        url: 'language',
        icon: 'translate'
      },
      {
        text: 'Contact',
        url: 'contact',
        icon: 'inboxes-fill'
      },
      {
        text: 'Social',
        url: 'social',
        icon: "bi bi-file-person-fill"
      },
    ];
  }

}
