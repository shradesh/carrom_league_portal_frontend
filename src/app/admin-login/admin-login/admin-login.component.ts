import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  // adminLoginForm!: FormGroup;
  // email = new FormControl('', Validators.required)
  // password = new FormControl('', Validators.required)

  constructor() { }

  ngOnInit(): void {
    // this.adminLoginForm = new FormGroup(
    //   {
    //     'email': this.email,
    //     'password': this.password
    //   }
    // )

  }

  ngOnDestory(){

  }
  onSubmit(){

  }
  
}
