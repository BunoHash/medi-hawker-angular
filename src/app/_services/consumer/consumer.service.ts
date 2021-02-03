import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { ConsumerRegister } from 'src/app/_models/consumer/consumerRegister.model';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  public apiPath = "consumer/"

  constructor(private api: ApiService,
              private http: HttpClient) { }


  public saveRegisterConsumer(consumer: ConsumerRegister): Observable<boolean> {
    return this.api.post<boolean>(`${this.apiPath}saveRegisterConsumer`, consumer);
  }

  emailAlreayExists(email: string): Observable<boolean> {
    return this.api.get<boolean>(`${this.apiPath}emailAlreayExists/${email}`);
  }

  usernameAlreayExists(username: string): Observable<boolean> {
    return this.api.get<boolean>(`${this.apiPath}userNameAlreayExists/${username}`);
  }
  
  
}
