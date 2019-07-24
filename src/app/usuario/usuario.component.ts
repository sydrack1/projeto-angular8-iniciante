import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios: Usuario[] = [
    {
      nome: 'Sydrack',
      email: 'drasyck1@gmail.com'
    },
    {
      nome: 'Joana',
      email: 'joaninha@gmail.com'
    },
    {
      nome: 'Henrique',
      email: 'riquinho@gmail.com'
    }
  ];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {}

}
