import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CabeceraComponent,CuerpoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Peluqueria';
}
