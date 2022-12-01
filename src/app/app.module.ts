import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ListaFacturaComponent } from './pages/lista-factura/lista-factura.component';
import { ListaArticuloComponent } from './pages/lista-articulo/lista-articulo.component';
import { ListaDetalleComponent } from './pages/lista-detalle/lista-detalle.component';
import { HomeComponent } from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { ListarrolesComponent } from './pages/listarroles/listarroles.component';
import { InterfazdeopcionesComponent } from './pages/interfazdeopciones/interfazdeopciones.component';
import { FormFacturaComponent } from './pages/form-factura/form-factura.component';
import { FormDetalleComponent } from './pages/form-detalle/form-detalle.component';
import { FormArticuloComponent } from './pages/form-articulo/form-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ListaFacturaComponent,
    ListaArticuloComponent,
    ListaDetalleComponent,
    HomeComponent,
    ListarrolesComponent,
    InterfazdeopcionesComponent,
    FormFacturaComponent,
    FormDetalleComponent,
    FormArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
