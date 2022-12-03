import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListaFacturaComponent } from './pages/lista-factura/lista-factura.component';
import { ListaDetalleComponent } from './pages/lista-detalle/lista-detalle.component';
import { ListaArticuloComponent } from './pages/lista-articulo/lista-articulo.component';
import { InterfazdeopcionesComponent } from './pages/interfazdeopciones/interfazdeopciones.component';
import { FormArticuloComponent } from './pages/form-articulo/form-articulo.component';
import { FormDetalleComponent } from './pages/form-detalle/form-detalle.component';
import { FormFacturaComponent } from './pages/form-factura/form-factura.component';

const routes: Routes = [
  {
    path:'',component: HomeComponent, pathMatch:'full'
  },
  {
    path:'login',component: LoginComponent, pathMatch:'full'
  },
  {
    path:'signup',component: SignupComponent, pathMatch:'full'
  },
  {
    path:'listafactura',component: ListaFacturaComponent, pathMatch:'full'
  },
  {
    path:'listadetalle',component: ListaDetalleComponent, pathMatch:'full'
  },
  {
    path:'listarticulo',component: ListaArticuloComponent, pathMatch:'full'
  },
  {
    path:'opciones',component: InterfazdeopcionesComponent, pathMatch:'full'
  },
  {
    path:'formfactura',component: FormFacturaComponent, pathMatch:'full'
  },
  {
    path:'formdetalle',component: FormDetalleComponent, pathMatch:'full'
  },
  {
    path:'formarticulo',component: FormArticuloComponent, pathMatch:'full'
  },
  {
    path:'formfactura/:id',component: FormFacturaComponent, pathMatch:'full'
  },
  {
    path:'formdetalle/:id',component: FormDetalleComponent, pathMatch:'full'
  },
  {
    path:'formarticulo/:id',component: FormArticuloComponent, pathMatch:'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
