import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _auth:AuthService, public _router: Router) { }

  ngOnInit() {
  }

  logInForm(){
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    this._auth.login(email, password)

  }



}
