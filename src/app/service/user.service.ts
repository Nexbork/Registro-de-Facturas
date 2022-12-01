import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {}

  public insertarusuario(user:any){
    return this.httpClient.post(`${urlbase}/usuario/c`, user);
  }
  

  public obtenerusuario(user:any){
    return this.httpClient.get(`${urlbase}/usuario`, user);
  }
}
