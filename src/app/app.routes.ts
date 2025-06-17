import { Routes } from '@angular/router';
import { RegistroPagComponent } from './paginas/registro-pag/registro-pag.component';
import { HomeComponent } from './paginas/home/home.component';
import { IniciarsesionComponent } from './paginas/iniciarsesion/iniciarsesion.component';
import { AdminComponent } from './paginas/admin/admin.component';


export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'registro',component:RegistroPagComponent},
    {path:'login',component:IniciarsesionComponent},
    {path:'admin',component:AdminComponent}
];
