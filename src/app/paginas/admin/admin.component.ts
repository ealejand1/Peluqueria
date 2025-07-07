import { Component } from '@angular/core';
import { CalendarioComponent } from "../../componentes/calendario/calendario.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Event } from '../../classes/event'; // Assuming you have an Event class defined in this path 

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CalendarioComponent,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  eventForm: FormGroup;
  titulo:FormControl;
  fecha:FormControl;
  horaInicio:FormControl;
  horaFin:FormControl;

  nuevoEvento:Event;


  constructor(){

    this.titulo = new FormControl('');
    this.fecha = new FormControl('');
    this.horaInicio = new FormControl('');
    this.horaFin = new FormControl('');

    this.nuevoEvento = {titulo: ""};
   
    this.eventForm = new FormGroup({
      titulo: this.titulo,
      fecha: this.fecha,
      horaInicio: this.horaInicio,
      horaFin: this.horaFin
    });
  }


  crearEvento():void{

    this.nuevoEvento = {
      titulo: this.titulo.value,
      fecha: new Date(this.fecha.value),
      horaInicio: this.horaInicio.value ? new Date(this.horaInicio.value) : undefined, //El operador ternario condición ? valorSiVerdadero : valorSiFalso
      horaFin: this.horaFin.value ? new Date(this.horaFin.value) : undefined
    }

    console.log(this.nuevoEvento);
    this.eventForm.reset();

  }

}
