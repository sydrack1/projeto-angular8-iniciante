import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public getUsuario():Usuario {
    let usuario = new Usuario()
    usuario.nome = "Sydrack"
    usuario.email = "drasyck1@gmail.com"

    return usuario
  }
}
