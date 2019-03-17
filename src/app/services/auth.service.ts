import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _myRoute: Router) {}

  isLogged(){
    var isLogged = localStorage.getItem("userlogged");
    console.log(isLogged);
    if (isLogged != null ){
        console.log("loggedIn = true")
        return true;
    }else if (isLogged == null ){
      console.log("loggedIn = false")
      return false;
    }
  }

  login(){
  var email = $('#inputEmail').val();
  var password = $('#inputPassword').val();
  var data = {"name":name,"email":email,"password": password};
  var url = "http://localhost:8000/userlogin"
    $.post(url, data, (response) => {
        var id = response[0]["id"];
        var password = response[0]["password"];
        var user = id+"/"+password;

        if (response == "wrongEmail"){
          return alert("email incorrecto")
        }else if(response == "wrongPass"){
          return alert("Contraseña incorrecta")
        }else if(password != undefined) {
        localStorage.setItem("userlogged", user);
        this._myRoute.navigate(["home"]); //<-- redirigir a otra página
        }
    });
  }

logOut(){
  localStorage.removeItem("userlogged");
  this._myRoute.navigate(["login"]); //<-- redirigir a otra página
}

goToLogin(){
  this._myRoute.navigate(["login"]); //<-- redirigir a otra página
}

goToSignup(){
  this._myRoute.navigate(["signup"]); //<-- redirigir a otra página
}

goToHome(){
  this._myRoute.navigate(["home"]); //<-- redirigir a otra página
}

}
