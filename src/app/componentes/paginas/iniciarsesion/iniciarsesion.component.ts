import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-iniciarsesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './iniciarsesion.component.html',
  styleUrl: './iniciarsesion.component.css'
})
export class IniciarsesionComponent {

  loginForm: FormGroup;
  email:FormControl;
  password:FormControl;

  constructor() {
    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
}
