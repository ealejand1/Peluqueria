import { Component } from '@angular/core';
import { RegistroPagComponent } from '../paginas/registro-pag/registro-pag.component';
import { IniciarsesionComponent } from "../paginas/iniciarsesion/iniciarsesion.component";


@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [RegistroPagComponent, IniciarsesionComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
