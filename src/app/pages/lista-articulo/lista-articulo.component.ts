import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArticuloService } from 'src/app/service/articulo.service';
import { LoginService } from 'src/app/service/login.service';
import { ListaArticulo } from '../lista-articulo';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {

  lista: ListaArticulo[];
  constructor(private articuloService: ArticuloService, private serviciologin: LoginService, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this.articuloService.getallarticulo().subscribe(
      a => this.lista = a
    );
  }

  delete(lista: ListaArticulo): void {

    let rol = this.serviciologin.getUserRol();
    if (rol == 'Administrador') {
      this.articuloService.deletarticulo(lista.aIdArticulo).subscribe(
        res => this.articuloService.getallarticulo().subscribe(
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
