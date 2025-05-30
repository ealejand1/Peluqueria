import { Component } from '@angular/core';
import { User } from '../../clases/user';
import { IniciarsesionComponent } from "../paginas/iniciarsesion/iniciarsesion.component";

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  // usuario: User = {'nombre': '', 'email': '', 'password': ''};

  // setUsuario(e : User) {
  //   this.usuario = e;
  // }

}
