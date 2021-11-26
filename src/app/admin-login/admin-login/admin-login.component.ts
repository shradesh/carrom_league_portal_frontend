import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm!: FormGroup;
  email = new FormControl('', Validators.required)
  password = new FormControl('', Validators.required)
  errorMsg=''
  successMsg=''
  constructor(private adminService: AdminLoginService, private router:Router) { }

  ngOnInit(): void {
    this.adminLoginForm = new FormGroup(
      {
         'email': this.email,
         'password': this.password
       }
      )
      console.log(this.adminLoginForm)
  }
  onSubmit(){
    this.errorMsg=''
    this.successMsg=''
  
     const email=this.adminLoginForm.value.email
     const password=this.adminLoginForm.value.password

     //api url
     let url=""
     console.log(url)
    
     this.adminService.adminLoginForm(url)
     .subscribe(
       (response) =>{
         console.log('Admin Login',response)
         this.successMsg="Admin Logged In."
       },
       (err) =>{
         console.log('error', err)
         this.errorMsg = err.error.error.message
       }
     );

  }

  
  
}
