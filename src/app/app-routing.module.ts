import { SignupFormComponent } from './signup-form/signup-form.component';
import { ChartroomComponent } from './chartroom/chartroom.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'signup',component:SignupFormComponent},
  {path:'login',component:LoginFormComponent},
  {path:'chat',component:ChartroomComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
