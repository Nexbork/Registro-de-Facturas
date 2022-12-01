import { Component, OnInit } from '@angular/core';

import { UserService } from './../../service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    aUserUsuario:'',
    aPasswordUsuario:'',
    aNombreUsuario:'',
    aApellidoUsuario:'',
    aEmailUsuario:'',
    aTelefono:''
  }
  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.aUserUsuario == ''|| this.user.aUserUsuario == null){
      this.snack.open('El nombre del usuario es requerido','Aceptar',{duration: 2000,horizontalPosition: 'right'});
      return;
    }
    this.userService.insertarusuario(this.user).subscribe(
      (data) => { console.log(data)} 
      );
    
  }

}
