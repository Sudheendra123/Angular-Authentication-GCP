import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  obj: Object;
  actualEmail: any;
  actualPassword: any;

    constructor(private service: LoginService, private router: Router){
     

    }
    canActivate() : boolean{
      if(this.service.loggedIn()){
        return true;

      }
      else{
        this.router.navigate(['login'])
        return false;
      }
        }
  }
