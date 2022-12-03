import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private detalleservice:DetalleService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }


  cargar():void{
    this.activatedRoute.params.subscribe(
      d=>{
        let id=d['id'];
        if(id){
          this.detalleservice.getdetalle(id).subscribe(
            ds=>this.lista=ds
          )
        }
      }
    )
  }

  formSubmit():void{
    console.log(this.lista);
    this.detalleservice.createdetalle(this.lista).subscribe(
      (data) => { console.log(data)
        this.router.navigate(['/listadetalle'])} 
      
      );
  }

  update():void{
    this.detalleservice.updatedetalle(this.lista).subscribe(
      res=>this.router.navigate(['/listadetalle'])
    )
  }
}
