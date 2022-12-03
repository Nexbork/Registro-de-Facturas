import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private facturaService:FacturaService, private router:Router, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      f=>{
        let id=f['id'];
        if(id){
          this.facturaService.getfactura(id).subscribe(
            fs=>this.lista=fs
          )
        }
      }
    )
  }

  formSubmit():void{
    console.log(this.lista);
    this.facturaService.createfactura(this.lista).subscribe(
      (data) => { console.log(data)
        this.router.navigate(['/listafactura'])} 
      );
  }

  update():void{
    this.facturaService.updatefactura(this.lista).subscribe(
      res=>this.router.navigate(['/listafactura'])
    )
  }

}

