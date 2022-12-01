import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack: MatSnackBar, private loginservice: LoginService, private router:Router) { }

  public datalogin = {
    username: '',
    password: ''
  }

  ngOnInit(): void {
  }


  formSubmit() {
    if (this.datalogin.username == '' || this.datalogin.username == null) {
      this.snack.open('Ingresar un usuario', 'Aceptar', { duration: 4000, horizontalPosition: 'right' });
      return;
    }
    if (this.datalogin.password == '' || this.datalogin.password == null) {
      this.snack.open('Ingresar una contraseña', 'Aceptar', { duration: 4000, horizontalPosition: 'right' });
      return;
    }

    this.loginservice.generartoken(this.datalogin).subscribe(
      (data: any) => {
        //console.log(data)
        this.loginservice.guardartoken(data.token);
        this.loginservice.readallroles().subscribe((datarol) => { console.log(datarol) })
        this.router.navigate(["/opciones"]);//rediccionar a mi ruta (lista de factura)
      }
    );

  }
}
