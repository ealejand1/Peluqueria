import { Component } from '@angular/core';
import { RegistroPagComponent } from '../paginas/registro-pag/registro-pag.component';


@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [RegistroPagComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
