import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  constructor(public _auth:AuthService, public _router: Router) { }

  ngOnInit() {
  }


  saveNewUser(){
    ​
  var name = $('#inputName').val();
  var email = $('#inputEmail').val();
  var password = $('#inputPassword').val();
  var repeatPassword = $('#inputRepeatPassword').val();
  var data = {"name":name,"email":email,"password": password, "address_id": 1};


  if(password != repeatPassword) {
    alert("Passwords Don't Match");
    return false;
  } else if  (password === repeatPassword){
    alert("passwords match!");

    this._auth.registerUser(name, email, password);

  }; //else if passwords match
  }//saveNewUser()
}//SignupComponent
