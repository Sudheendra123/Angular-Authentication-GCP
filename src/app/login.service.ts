import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  public token =  new Subject();
  // public password = new Subject();
  constructor(private http: HttpClient, private router: Router) { }

  checkLogin(user){
    return this.http.post('http://localhost:3000/api/login', user)
  }

  register(user){
    return this.http.post<any>('http://localhost:3000/api/register', user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  gettoken(){
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token')
  }
  
  logout(){
    localStorage.removeItem('token')
    this.token.next("No")
    this.router.navigate(['home'])
  }

}
