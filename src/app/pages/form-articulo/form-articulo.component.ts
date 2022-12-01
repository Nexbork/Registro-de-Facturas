import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/service/articulo.service';
import { ListaArticulo } from '../lista-articulo';

@Component({
  selector: 'app-form-articulo',
  templateUrl: './form-articulo.component.html',
  styleUrls: ['./form-articulo.component.css']
})
export class FormArticuloComponent implements OnInit {

  lista:ListaArticulo = new ListaArticulo;

  titulo:string ="Registro de Articulo";
  constructor(private articuloservice:ArticuloService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit():void{
    console.log(this.lista);
    this.articuloservice.createarticulo(this.lista).subscribe(
      (data) => { console.log(data)
        this.router.navigate(['/listarticulo'])} 
      
      );
  }
}
