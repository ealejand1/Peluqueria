import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.css'
})
export class ReservaComponent {

  registroForm = new FormGroup({
    nombre: new FormControl('',[Validators.required ,Validators.minLength(3)]),
    ape: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl(''),
    passwd:new FormControl('')
  });

  reservar(): void {
    console.log(this.registroForm.value);
  }




}
