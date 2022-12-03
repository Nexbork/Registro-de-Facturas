import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaArticulo } from '../pages/lista-articulo';

import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private httpClient:HttpClient) { }

  //obtener los articulos 
  getallarticulo():Observable<ListaArticulo[]>{
    return this.httpClient.get<ListaArticulo[]>(`${urlbase}/articulo`, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  //crear un articulo
  createarticulo(articulo:any):Observable<ListaArticulo[]>{
    return this.httpClient.post<ListaArticulo[]>(`${urlbase}/articulo`, articulo, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
  
  //obtener un articulo
  getarticulo(id:number):Observable<ListaArticulo>{
    return this.httpClient.get<ListaArticulo>(`${urlbase}/articulo` +'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }

  //actualizar el articulo
  updatearticulo(lista:ListaArticulo):Observable<ListaArticulo>{
    return this.httpClient.put<ListaArticulo>(`${urlbase}/articulo`, lista, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
  
  deletarticulo(id:number):Observable<ListaArticulo>{
    return this.httpClient.delete<ListaArticulo>(`${urlbase}/articulo` +'/'+id, {
      headers:new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }
}
