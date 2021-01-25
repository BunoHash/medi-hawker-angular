import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { ConsumerRegister } from 'src/app/_models/consumer/consumerRegister.model';
import { ConsumerDetails } from 'src/app/_models/consumer/consumerDetails.model';
import { ConsumerService } from 'src/app/_services/consumer/consumer.service';


@Component({
  selector: 'consumer-registration',
  templateUrl: './consumer-registration.component.html',
})
export class ConsumerRegistrationComponent implements OnInit {

  constructor(private http: HttpClient,
    private consumerService: ConsumerService
  ) { }

  public txtUserName = "";
  public txtPhone = "";
  public txtAddress = "";
  public txtEmail = "";
  public txtFirstName = "";
  public txtLastName = "";


  ConsumerForm = new FormGroup({
    UserName: new FormControl(""),
    Phone: new FormControl(""),
    Address: new FormControl(""),
    Email: new FormControl(""),
    FirstName: new FormControl(""),
    LastName: new FormControl("")

  })
  saveRegisterConsumer(consumer: ConsumerRegister) {

    this.consumerService.saveRegisterConsumer(consumer).subscribe(data => {
      console.log(data);

    }, error => {
      console.log(error);
    });

  }
  registerConsumer() {

    var consumerRegister = new ConsumerRegister();
    var consumer = new Consumer();
    var consumerDetails = new ConsumerDetails();


    consumer = this.ConsumerForm.value;
    consumerRegister.Consumer = consumer;
    consumerRegister.ConsumerDetails = this.ConsumerForm.value;
    this.saveRegisterConsumer(consumerRegister);
    consumerRegister
    // consumer.UserName = this.ConsumerForm.controls["UserName"].value;
    // consumer.Phone = this.ConsumerForm.controls["Phone"].value;
    // consumerDetails.Address = this.ConsumerForm.controls["Address"].value;
    // consumerDetails.Email = this.ConsumerForm.controls["Email"].value;
    // consumerDetails.FirstName = this.ConsumerForm.controls["FirstName"].value;
    // consumerDetails.LastName = this.ConsumerForm.controls["LastName"].value;


    // console.log('Cons', consumerRegister.Consumer);


    // console.log('DTL', consumerRegister.ConsumerDetails);


    // console.log(this.ConsumerForm.value);
  }

  ngOnInit(): void {
  }

}
