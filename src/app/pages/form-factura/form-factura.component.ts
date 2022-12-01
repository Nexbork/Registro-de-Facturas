import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/service/factura.service';
import { ListaFacturas } from '../lista-facturas';

@Component({
  selector: 'app-form-factura',
  templateUrl: './form-factura.component.html',
  styleUrls: ['./form-factura.component.css']
})
export class FormFacturaComponent implements OnInit {

  lista:ListaFacturas = new ListaFacturas;

  titulo:string="Registro de Factura";
  constructor(private facturaService:FacturaService, private router:Router) { }
  
  ngOnInit(): void {
  }

  formSubmit():void{
    console.log(this.lista);
    this.facturaService.createfactura(this.lista).subscribe(
      (data) => { console.log(data)
        this.router.navigate(['/listafactura'])} 
      
      );
  }
}
