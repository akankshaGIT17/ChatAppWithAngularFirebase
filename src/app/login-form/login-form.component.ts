import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }
  login(){
    console.log('login() called from login-form component');
    this.authService.login(this.email, this.password)
    .catch(error => console.log(error.message));//this.errorMsg = error.message);
  }

}
