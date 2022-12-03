import { Injectable } from '@angular/core';
import urlbase from './helper';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaDetalle } from '../pages/lista-detalle';


@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(private httpClient:HttpClient) { }

  getalldetalle():Observable<ListaDetalle[]>{
    return this.httpClient.get<ListaDetalle[]>(`${urlbase}/detalle`,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  //crear un articulo
  createdetalle(lista:any):Observable<ListaDetalle[]>{
    return this.httpClient.post<ListaDetalle[]>(`${urlbase}/detalle`, lista, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
  
  //obtener un articulo
  getdetalle(id:number):Observable<ListaDetalle>{
    return this.httpClient.get<ListaDetalle>(`${urlbase}/detalle` +'/'+id,{
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    } );
  }

  //actualizar el articulo
  updatedetalle(lista:ListaDetalle):Observable<ListaDetalle>{
    return this.httpClient.put<ListaDetalle>(`${urlbase}/detalle`, lista, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
  
  deletedetalle(id:number):Observable<ListaDetalle>{
    return this.httpClient.delete<ListaDetalle>(`${urlbase}/detalle` +'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}
