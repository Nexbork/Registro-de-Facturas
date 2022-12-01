import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleService } from 'src/app/service/detalle.service';
import { ListaDetalle } from '../lista-detalle';

@Component({
  selector: 'app-form-detalle',
  templateUrl: './form-detalle.component.html',
  styleUrls: ['./form-detalle.component.css']
})
export class FormDetalleComponent implements OnInit {

  lista: ListaDetalle = new ListaDetalle;

  titulo:string="Registro de detalle";
  constructor(private detalleservice:DetalleService, private router:Router) { }

  ngOnInit(): void {
  }


  formSubmit():void{
    console.log(this.lista);
    this.detalleservice.createdetalle(this.lista).subscribe(
      (data) => { console.log(data)
        this.router.navigate(['/listadetalle'])} 
      
      );
  }
}
