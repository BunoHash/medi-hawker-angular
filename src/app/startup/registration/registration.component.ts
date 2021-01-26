import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Consumer } from 'src/app/_models/consumer/consumer.model';
import { ConsumerRegister } from 'src/app/_models/consumer/consumerRegister.model';
import { ConsumerDetails } from 'src/app/_models/consumer/consumerDetails.model';
import { ConsumerService } from 'src/app/_services/consumer/consumer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, forkJoin, Subject } from 'rxjs';

@Component({
  selector: 'consumer-registration',
  templateUrl: './registration.component.html',
})
export class ConsumerRegistrationComponent implements OnInit {
  dark: boolean;
  public txtUserName = "";
  public txtPhone = "";
  public txtAddress = "";
  public txtEmail = "";
  public txtFirstName = "";
  public txtLastName = "";
  public txtPassword = "";
  consumerForm: FormGroup;
  searchEmailTextSubject$ = new Subject<string>();
  searchUsernameTextSubject$ = new Subject<string>();
  emailExists: boolean;


  constructor(private http: HttpClient,
    private consumerService: ConsumerService,
    private toastr: ToastrService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.dark = true;
    this.consumerForm = new FormGroup({
      UserName: new FormControl("", Validators.required),
      Phone: new FormControl("", Validators.required),
      Address: new FormControl("", Validators.required),
      Email: new FormControl("", Validators.required),
      FirstName: new FormControl("", Validators.required),
      LastName: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
      ConfirmPassword: new FormControl("", Validators.required),

    },
      { validators: this.passwordMatch }
    );

    this.searchEmailTextSubject$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map(x => x),
      switchMap(searchText => this.consumerService.emailAlreayExists(searchText))
    ).subscribe(isExists => {
      this.emailExists = isExists;
      console.log('email exists ----', this.emailExists);
    });

  }

  passwordMatch(g: FormGroup) {
    return g.get("Password").value === g.get("ConfirmPassword").value ? null : { mismatch: true };
  }

  checkEmail(event) {
    console.log(event.target.value);

    this.searchEmailTextSubject$.next(event.target.value);
  }




  saveRegisterConsumer(consumer: ConsumerRegister) {

    this.consumerService.saveRegisterConsumer(consumer).subscribe(data => {
      console.log(data);
      this.toastr.success('Registration successful !');
      this.router.navigate(['/login']);
    }, error => {
      console.log(error);
    });

  }
  registerConsumer() {

    var consumerRegister = new ConsumerRegister();
    var consumer = new Consumer();
    var consumerDetails = new ConsumerDetails();


    consumer = this.consumerForm.value;
    consumerRegister.Consumer = consumer;
    consumerRegister.ConsumerDetails = this.consumerForm.value;
    this.saveRegisterConsumer(consumerRegister);
    consumerRegister

    // consumer.UserName = this.consumerForm.controls["UserName"].value;
    // consumer.Phone = this.consumerForm.controls["Phone"].value;
    // consumerDetails.Address = this.consumerForm.controls["Address"].value;
    // consumerDetails.Email = this.consumerForm.controls["Email"].value;
    // consumerDetails.FirstName = this.consumerForm.controls["FirstName"].value;
    // consumerDetails.LastName = this.consumerForm.controls["LastName"].value;


    // console.log('Cons', consumerRegister.Consumer);


    // console.log('DTL', consumerRegister.ConsumerDetails);


    // console.log(this.consumerForm.value);
  }



}
