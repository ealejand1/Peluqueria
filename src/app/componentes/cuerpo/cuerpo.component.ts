import { Component } from '@angular/core';
import { ReservaComponent } from '../funcionalidades/reserva/reserva.component';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [ReservaComponent],
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css'
})
export class CuerpoComponent {

}
