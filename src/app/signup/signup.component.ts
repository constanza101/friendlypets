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
    console.log($('div'))
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
    console.log("passwords match!");
  };

  var url = "http://localhost:8000/user"

    $.post(url, data, function(response) {
        console.log(response);



    });
  }
}
