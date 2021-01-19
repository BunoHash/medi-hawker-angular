import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/_models/auth/login.model';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent {

  dark: boolean;

  checked: boolean;

  username: string = '';
  password: string = '';  

  constructor(private authService:AuthService,
              private router:Router){

  }

  login(){

    let obj = new LoginModel();
    obj.Username = this.username;
    obj.Password = this.password;

    this.authService.login(obj).subscribe(data=>{
        console.log(data);
        if(data)
        localStorage.setItem('token',data);
        else{
          this.router.navigate(['/login']);
        }
        
    });
  }

}
