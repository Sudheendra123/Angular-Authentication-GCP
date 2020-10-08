import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service : LoginService) { }

  intercept(req, next){
    let tokenziereq = req.clone({
      setHeaders : {
          Authorization : `Bearer ${this.service.gettoken()}`
      }
    })
    return next.handle(tokenziereq)

  }
}
