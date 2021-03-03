import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { ConsumerRegister } from 'src/app/_models/consumer/consumerRegister.model';
import { Manufacturer } from 'src/app/_models/manufacturer/manufacturer.model';
import { ApiService } from '../common/api.service';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  public apiPath = "manufacturer/"

  constructor(private api: ApiService) { }

  getAllManufacturer() {

    return this.api.get<Manufacturer[]>(`${this.apiPath}getAllManufacturer`);
  }

}


