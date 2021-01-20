import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginMessageEN } from 'src/app/messages/login.messages';
import { LoginModel } from 'src/app/_models/auth/login.model';
import { AlertifyService } from 'src/app/_services/alertify.service';
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
              private router:Router,
              private alertifyService:AlertifyService){

  }

  login(){

    let obj = new LoginModel();
    obj.Username = this.username;
    obj.Password = this.password;

    this.authService.login(obj).subscribe(data=>{
        console.log(data);
        if(data){
          localStorage.setItem('token',data);
          this.alertifyService.success(LoginMessageEN.LOGIN_SUCCESS_EN);
        }
        else{
          this.clearLoginForm();
          this.alertifyService.error(LoginMessageEN.LOGIN_FAILED_EN);
          this.router.navigate(['/login']);
        }
        
    }, error =>{
      this.clearLoginForm();
      this.alertifyService.error(LoginMessageEN.LOGIN_FAILED_EN);
      this.router.navigate(['/login']);
    });
  }

  clearLoginForm(){
    this.username = "";
    this.password = "";
  }

}
