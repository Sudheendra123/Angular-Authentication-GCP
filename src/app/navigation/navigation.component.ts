import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, public service: LoginService) { }
  token:boolean = false;

  ngOnInit(): void {
   this.service.token.subscribe(res=>{
     if(res == "Yes"){
       this.token =true
     }
     else{
       this.token =false
     }
   })
  }

  login(){
    this.router.navigate(['login'])
  }

  signUp(){

      this.router.navigate(['signUp'])
  
  }




}
