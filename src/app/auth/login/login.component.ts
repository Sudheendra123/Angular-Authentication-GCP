import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  maxDate;
  user = {};
  password: any;
  result: any;
  error: boolean = false;
  constructor(private service: LoginService, private router: Router) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18)
  }

  formSubmit(event){
    console.log(event)
    this.user['email'] = event.value['email'];
    this.user['password'] = event.value['password'];
    this.service.checkLogin(this.user).subscribe(res=>{
      localStorage.setItem('token', res['token'])
      this.router.navigate(['/welcome']);
      this.service.token.next("Yes")
    }, err=>{
      console.log(err)
      this.error = true;
    })
  }
}
