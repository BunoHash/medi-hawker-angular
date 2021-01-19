import { Injectable } from '@angular/core';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  public apiPath = "consumer/"

  constructor(private api : ApiService) { }

  public saveRegisterConsumer(consumer:Consumer){
      this.api.post<void>(`${this.apiPath}saveRegisterConsumer`,consumer); 
  }


}
