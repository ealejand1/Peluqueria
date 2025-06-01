import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../classes/user';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css'
})
export class IniciarsesionComponent {

  @Output()
  mandarUsuario: EventEmitter<User> = new EventEmitter<User>();

  usuario: User;

  loginForm: FormGroup;
  email:FormControl;
  password:FormControl;

  constructor() {

    this.usuario = {
      nombre: '',
      email: '',
      telefono: '',
      password: ''
    }
 
    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onLogin(){
    this.usuario.nombre = "Erik";
    this.usuario.email = this.loginForm.value.email;
    this.usuario.password = this.loginForm.value.password;

    this.mandarUsuario.emit(this.usuario)

    console.log(this.usuario)
  }

}
