import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/_models/auth/login.model';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { LoginSuccessModel } from 'src/app/_models/LoginSuccessModel/loginSuccessModel.model';
import { TokenModel } from 'src/app/_models/token.model';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiPATH = 'auth/';

  constructor(private api: ApiService,
    private jwtHelperService: JwtHelperService) { }

  login(model: LoginModel) {

    return this.api.post<LoginSuccessModel>(`${this.apiPATH}login`, model);
  }
  getAccessToken(): string {
    return 'Bearer ' + localStorage.getItem('token');
  }

  isTokenExpired() {
    return this.jwtHelperService.isTokenExpired(this.getAccessToken());
  }
  getUsername() {
    let token = this.jwtHelperService.decodeToken(this.getAccessToken());
    console.log('User---Name', token['Username']);

    return token['Username'];
  }

  getUserInfo(): Consumer {
    let getdata = JSON.parse(localStorage.getItem('token')) as TokenModel;
    return getdata.User;
  }
  // LoginConsumer(LoginSuccess: LoginSuccessModel) {
  //   return this.api.post<LoginSuccessModel>(`${this.apiPATH}login`, LoginSuccess)
  // }


}
