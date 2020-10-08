import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { materialModule } from './material.module';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginErrorComponent } from './auth/login-error/login-error.component'
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { NavigationComponent } from './navigation/navigation.component'
// import { TokenInterceptorComponent } from './token-interceptor/token-interceptor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeComponent,
    LoginErrorComponent,
    NavigationComponent,
    // TokenInterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    materialModule,
    HttpClientModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
