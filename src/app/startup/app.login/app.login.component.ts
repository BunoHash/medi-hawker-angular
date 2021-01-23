import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginMessageEN } from 'src/app/messages/login.messages';
import { LoginModel } from 'src/app/_models/auth/login.model';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit {

  dark: boolean;

  checked: boolean;

  username: string = '';
  password: string = '';  
  loaderVisible: boolean = false;

  constructor(private authService:AuthService,
              private router:Router,
              private alertifyService:AlertifyService){

  }
  ngOnInit(): void {
    this.dark = true;
  }

  login(){

    let obj = new LoginModel();
    obj.Username = this.username;
    obj.Password = this.password;
    this.loaderVisible = true;
    this.routeToDefaultModule();


    // this.authService.login(obj).subscribe(data=>{
    //     console.log(data);
    //     if(data){
    //       localStorage.setItem('token',data);
    //       this.alertifyService.success(LoginMessageEN.LOGIN_SUCCESS_EN);

    //       this.hideLoader();
    //       this.routeToDefaultModule();
    //     }
    //     else{
    //       this.hideLoader();
    //       this.clearLoginForm();
    //       this.alertifyService.error(LoginMessageEN.LOGIN_FAILED_EN);
    //       this.router.navigate(['/login']);
    //     }
        
    // }, error =>{
    //   this.clearLoginForm();
    //   this.hideLoader();
    //   this.alertifyService.error(LoginMessageEN.LOGIN_FAILED_EN);
    //   this.router.navigate(['/login']);
    // });
  }
  hideLoader() {  
    this.loaderVisible = false;
  }
  routeToDefaultModule() {
    this.router.navigate(['/consumer']);
  }

  clearLoginForm(){
    this.username = "";
    this.password = "";
  }

}
