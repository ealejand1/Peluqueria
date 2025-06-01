import { Injectable } from '@angular/core';
import { User } from '../../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: User[];


  constructor() {
    this.usuarios = [
      {
        nombre: 'Erik',
        email: 'erikalejjandro@gmail.com',
        telefono: '612345678',
        password: '123'
      },
      {
        nombre: 'Brad',
        email: 'bradalejjandro@gmail.com',
        telefono: '653214567',
        password: '123'
      },
    ];
  }

  getUsuarios(): User[] {
    return this.usuarios;
  }

  addUsuario(usuario:User): void {
    this.usuarios.push(usuario);
  }
}
