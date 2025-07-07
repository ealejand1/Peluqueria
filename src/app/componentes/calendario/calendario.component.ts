import { Component, Input, SimpleChanges } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular'; // Importa el módulo de FullCalendar
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid'; // Importa el plugin de vista de cuadrícula diaria
import timeGridPlugin from '@fullcalendar/timegrid'; // Importa el plugin de vista de cuadrícula de tiempo
import { Event } from '../../classes/event';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {

  @Input() evento!:Event;
  
  ngOnChanges(): void {
    if (this.evento) {
      console.log('Evento actualizado:', this.evento);
      // Aquí puedes agregar lógica para manejar el evento actualizado
    }
  }

  calendarOptions: CalendarOptions = {
    headerToolbar:{
      start:'prev,next',
      center:'title',
      end:'today,dayGridMonth,timeGridDay' // Botones de navegación y vistas
    },
    height:'50vh',
    locale: 'es', // Establece el idioma del calendario a español
    plugins: [dayGridPlugin,timeGridPlugin],
    initialView: 'dayGridMonth', // Vista inicial del calendario
    views:{
      timeGridDay: {
        slotMaxTime: '20:00:00', // Hora máxima del día
        slotMinTime: '08:00:00', // Hora mínima del día
      }
    }
  }

}
