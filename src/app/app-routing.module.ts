import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { LoginErrorComponent } from './auth/login-error/login-error.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "signUp", component: SignUpComponent},
  {path: "loginError", component: LoginErrorComponent},
  {path: "welcome", component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
