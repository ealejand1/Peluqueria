import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../service/usuario/usuario.service';


@Component({
  selector: 'app-registro-pag',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-pag.component.html',
  styleUrl: './registro-pag.component.css'
})
export class RegistroPagComponent {
  registroForm: FormGroup;
  nombre: FormControl
  correo: FormControl;
  telefono: FormControl;
  passwd: FormControl;

  constructor(public usuarioService:UsuarioService) {
    this.nombre = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.correo = new FormControl('',[Validators.required, Validators.email]);
    this.telefono = new FormControl('',[Validators.required, Validators.pattern('^[6]{1}[0-9]{8}$')]);
    this.passwd = new FormControl('');

    this.registroForm = new FormGroup({
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      passwd: this.passwd
    });
  }

  registerUser(): void {
    this.usuarioService.addUsuario(this.registroForm.value);
    console.log(this.usuarioService.getUsuarios());
    this.registroForm.reset();
  }

}
