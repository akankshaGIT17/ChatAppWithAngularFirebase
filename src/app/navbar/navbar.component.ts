import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

    user: Observable<firebase.User>;
    userEmail: string;
  
  
    ngOnInit() {
       this.user = this.authService.authUser();
       this.user.subscribe(user => {
        if (user) {
          this.userEmail = user.email;
        }
      });
    }
  
    logout() {
      this.authService.logout();
    }
    login() {
      this.authService.login(this.userEmail, "user");
     }
}
