import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              items: [{
                      label: 'Home',
                      icon: 'pi pi-fw pi-home',
                      routerLink: 'home'
                  },
                  {label: 'Open'},
                  {label: 'Quit'}
              ]
          },
          {
              label: 'Estados',
              icon: 'pi pi-fw pi-brazil',
              items: [
                  {label: 'Estado', icon: 'pi pi-fw pi-flag', routerLink: 'estados'}
              ]
          }
      ];
  }

}
