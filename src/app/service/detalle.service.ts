import { Injectable } from '@angular/core';
import urlbase from './helper';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListaDetalle } from '../pages/lista-detalle';


@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(private httpClient:HttpClient) { }

  getalldetalle():Observable<ListaDetalle[]>{
    return this.httpClient.get<ListaDetalle[]>(`${urlbase}/detalle`);
  }

  //crear un articulo
  createdetalle(lista:any):Observable<ListaDetalle[]>{
    return this.httpClient.post<ListaDetalle[]>(`${urlbase}/detalle`, lista);
  }
  
  //obtener un articulo
  getdetalle(id:number):Observable<ListaDetalle>{
    return this.httpClient.get<ListaDetalle>(`${urlbase}/detalle` +'/'+id);
  }

  //actualizar el articulo
  updatedetalle(lista:ListaDetalle):Observable<ListaDetalle>{
    return this.httpClient.put<ListaDetalle>(`${urlbase}/detalle`, lista);
  }
  
  deletedetalle(id:number):Observable<ListaDetalle>{
    return this.httpClient.delete<ListaDetalle>(`${urlbase}/detalle` +'/'+id);
  }
}
