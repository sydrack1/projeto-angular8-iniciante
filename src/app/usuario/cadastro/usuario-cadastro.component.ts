import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html'
})
export class UsuarioCadastroComponent implements OnInit {

  // tslint:disable-next-line:semicolon
  public usuario: Usuario = new Usuario()
  constructor() { }

  ngOnInit() {
  }
  salvar() {
    console.log(this.usuario);
    alert('Salvo com sucesso');
  }
}
