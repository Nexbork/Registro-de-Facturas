import { Component, OnInit } from '@angular/core';
import { ListaDetalle } from '../lista-detalle';
import { DetalleService } from 'src/app/service/detalle.service';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  lista:ListaDetalle[];
  constructor(private detalleService:DetalleService) { }

  ngOnInit(): void {
    this.detalleService.getalldetalle().subscribe(
      d=> this.lista=d
    );
  }

  delete(lista:ListaDetalle):void{
    this.detalleService.deletedetalle(lista.aIdDetalle).subscribe(
      res=>this.detalleService.getalldetalle().subscribe(
        response=>this.lista=response
      )
    )
  }

}
