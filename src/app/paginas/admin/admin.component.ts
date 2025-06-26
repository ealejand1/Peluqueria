import { Component } from '@angular/core';
import { CalendarioComponent } from "../../componentes/calendario/calendario.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CalendarioComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
