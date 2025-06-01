import { Routes } from '@angular/router';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { RegistroPagComponent } from './paginas/registro-pag/registro-pag.component';


export const routes: Routes = [
    {path:'',component: CuerpoComponent},
    {path:'registro',component:RegistroPagComponent}
];
