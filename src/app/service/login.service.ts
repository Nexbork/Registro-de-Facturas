import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import urlbase from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  public generartoken(datalogin:any){              
    return this.httpClient.post(`${urlbase}/autenticacion/generartoken`,datalogin);//microservicio de generar token
  }

  public guardartoken(token:any){
    localStorage.setItem('token',token);
    return true;
  }

  public readallroles(){
    return this.httpClient.get(`${urlbase}/rol`,{
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')})
    });
  }


}
