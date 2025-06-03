import { Component } from '@angular/core';
import { CuerpoComponent } from "../../componentes/cuerpo/cuerpo.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CuerpoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
