import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  maxDate;
  user ={};
  userStored:boolean= false;
  constructor(private service : LoginService) { }

  ngOnInit() {
    // this.maxDate = new Date();
    // this.maxDate.setFullYear(this.maxDate.getFullYear() -18)
  }

  formSubmit(event){
    console.log(event.value.email)
    this.user['email'] = event.value.email;
    this.user['password'] =event.value.password;
    console.log(this.user)
    this.service.register(this.user).subscribe(res=>{
      localStorage.setItem('token', res['token'])
      this.userStored = true;
    }, err=>{
      console.log(err)
    })
  }



}
