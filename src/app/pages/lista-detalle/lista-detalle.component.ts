import { Component, OnInit } from '@angular/core';
import { ListaDetalle } from '../lista-detalle';
import { DetalleService } from 'src/app/service/detalle.service';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  lista: ListaDetalle[];
  constructor(private detalleService: DetalleService, private serviciologin: LoginService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.detalleService.getalldetalle().subscribe(
      d => this.lista = d
    );
  }

  delete(lista: ListaDetalle): void {
    let rol = this.serviciologin.getUserRol();
    if (rol == 'Administrador') {
      this.detalleService.deletedetalle(lista.aIdDetalle).subscribe(
        res => this.detalleService.getalldetalle().subscribe(
          response => this.lista = response
        )
      )
    }
    else {
      this.snack.open('No tiene el privilegio suficiente', 'Aceptar', { duration: 4000, horizontalPosition: 'right' });
      return;
    }
  }

}
