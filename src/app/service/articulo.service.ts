import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<ListaArticulo[]>(`${urlbase}/articulo`);
  }

  //crear un articulo
  createarticulo(articulo:any):Observable<ListaArticulo[]>{
    return this.httpClient.post<ListaArticulo[]>(`${urlbase}/articulo`, articulo);
  }
  
  //obtener un articulo
  getarticulo(id:number):Observable<ListaArticulo>{
    return this.httpClient.get<ListaArticulo>(`${urlbase}/articulo` +'/'+id);
  }

  //actualizar el articulo
  updatearticulo(lista:ListaArticulo):Observable<ListaArticulo>{
    return this.httpClient.put<ListaArticulo>(`${urlbase}/articulo`, lista);
  }
  
  deletarticulo(id:number):Observable<ListaArticulo>{
    return this.httpClient.delete<ListaArticulo>(`${urlbase}/articulo` +'/'+id);
  }
}
