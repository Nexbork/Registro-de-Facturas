import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private articuloservice:ArticuloService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      f=>{
        let id=f['id'];
        if(id){
          this.articuloservice.getarticulo(id).subscribe(
            fs=>this.lista=fs
          )
        }
      }
    )
  }

  formSubmit():void{
    console.log(this.lista);
    this.articuloservice.createarticulo(this.lista).subscribe(
      (data) => { console.log(data)
        this.router.navigate(['/listarticulo'])} 
      
      );
  }

  update():void{
    this.articuloservice.updatearticulo(this.lista).subscribe(
      res=>this.router.navigate(['/listarticulo'])
    )
  }
}
