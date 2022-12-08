import { Component, OnInit } from '@angular/core';
import { ListaFacturas } from '../lista-facturas';
import { FacturaService } from 'src/app/service/factura.service';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-lista-factura',
  templateUrl: './lista-factura.component.html',
  styleUrls: ['./lista-factura.component.css']
})
export class ListaFacturaComponent implements OnInit {

  lista:ListaFacturas[];
  constructor(private facturaService: FacturaService, private serviciologin: LoginService, private snack:MatSnackBar) { }

  ngOnInit(): void {
      this.facturaService.getallfactura().subscribe(
        f => this.lista=f
      );
  }

  delete(lista: ListaFacturas): void {
    let rol = this.serviciologin.getUserRol();

    if (rol == 'Administrador') {
      this.facturaService.deletefactura(lista.aIdFactura).subscribe(
        res => this.facturaService.getallfactura().subscribe(
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
