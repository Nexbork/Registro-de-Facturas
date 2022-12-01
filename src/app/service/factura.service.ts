import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaFacturas } from '../pages/lista-facturas';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private httpClient:HttpClient) { }

  getallfactura():Observable<ListaFacturas[]>{
    return this.httpClient.get<ListaFacturas[]>(`${urlbase}/factura`);
  }

  //crear un articulo
  createfactura(factura:any):Observable<ListaFacturas[]>{
    return this.httpClient.post<ListaFacturas[]>(`${urlbase}/factura`, factura);
  }
  
  //obtener un articulo
  getfactura(id:number):Observable<ListaFacturas>{
    return this.httpClient.get<ListaFacturas>(`${urlbase}/factura` +'/'+id);
  }

  //actualizar el articulo
  updatefactura(lista:any):Observable<ListaFacturas>{
    return this.httpClient.put<ListaFacturas>(`${urlbase}/factura`, lista);
  }
  
  deletefactura(id:number):Observable<ListaFacturas>{
    return this.httpClient.delete<ListaFacturas>(`${urlbase}/factura` +'/'+id);
  }
}
