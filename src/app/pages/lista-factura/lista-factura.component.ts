import { Component, OnInit } from '@angular/core';
import { ListaFacturas } from '../lista-facturas';
import { FacturaService } from 'src/app/service/factura.service';


@Component({
  selector: 'app-lista-factura',
  templateUrl: './lista-factura.component.html',
  styleUrls: ['./lista-factura.component.css']
})
export class ListaFacturaComponent implements OnInit {

  lista:ListaFacturas[];
  constructor(private facturaService:FacturaService) { }

  ngOnInit(): void {
      this.facturaService.getallfactura().subscribe(
        f => this.lista=f
      );
  }

  delete(lista:ListaFacturas):void{
    this.facturaService.deletefactura(lista.aIdFactura).subscribe(
      res=>this.facturaService.getallfactura().subscribe(
        response=>this.lista=response
      )
    )
  }
}
