import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/_models/auth/login.model';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiPATH = 'auth/';

  constructor(private api: ApiService) { }

  login(model: LoginModel) {

    return this.api.post<string>(`${this.apiPATH}login`, model);
  }
}
