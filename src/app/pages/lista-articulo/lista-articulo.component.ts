import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/service/articulo.service';
import { ListaArticulo } from '../lista-articulo';

@Component({
  selector: 'app-lista-articulo',
  templateUrl: './lista-articulo.component.html',
  styleUrls: ['./lista-articulo.component.css']
})
export class ListaArticuloComponent implements OnInit {

  lista:ListaArticulo[];
  constructor(private articuloService:ArticuloService) { }

  ngOnInit(): void {

    this.articuloService.getallarticulo().subscribe(
      a=> this.lista=a
    ) ;   
  }

  delete(lista:ListaArticulo):void{
    this.articuloService.deletarticulo(lista.aIdArticulo).subscribe(
      res=>this.articuloService.getallarticulo().subscribe(
        response=>this.lista=response
      )
    )
  }
}
