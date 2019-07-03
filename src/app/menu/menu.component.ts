import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public texto:string
  constructor() { }

  ngOnInit() {
    this.texto = "Olá mundo"
  }
  clicked(text:string){
    this.texto = text
  }
}
