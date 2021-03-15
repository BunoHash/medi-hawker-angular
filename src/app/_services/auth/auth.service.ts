import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/_models/auth/login.model';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiPATH = 'auth/';

  constructor(private api: ApiService,
    private jwtHelperService: JwtHelperService) { }

  login(model: LoginModel) {

    return this.api.post<string>(`${this.apiPATH}login`, model);
  }
  getAccessToken(): string {
    return localStorage.getItem('token');
  }

  isTokenExpired() {
    return this.jwtHelperService.isTokenExpired(this.getAccessToken());
  }
  getUsername() {
    let token = this.jwtHelperService.decodeToken(this.getAccessToken());
    console.log('User---Name', token['Username']);

    return token['Username'];
  }

}
