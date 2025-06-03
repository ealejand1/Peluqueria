import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  // usuario: User = {'nombre': '', 'email': '', 'password': ''};

  // setUsuario(e : User) {
  //   this.usuario = e;
  // }

  constructor(private router:Router) {
  }

  redirectLogin():void{
    this.router.navigate(['/login'])
  }

  redirectHome():void{
    this.router.navigate([''])
  }

}
