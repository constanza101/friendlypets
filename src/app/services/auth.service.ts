import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _myRoute: Router) {}

  isLogged(){
    var isLogged = localStorage.getItem("userlogged");
  //  console.log(isLogged);
    if (isLogged != null ){
  //      console.log("loggedIn = true")
        return true;
    }else if (isLogged == null ){
  //    console.log("loggedIn = false")
      return false;
    }
  }

  login(email, password){
  var data = {"email":email,"password": password};
  var url = "http://18.224.131.43:443/userlogin"
  console.log(data)

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

goToMyProfile(){
  this._myRoute.navigate(["myprofile"]); //<-- redirigir a otra página
}

goToPlacesList(){
  this._myRoute.navigate(["places-list"]); //<-- redirigir a otra página
}

goToEditProfile(){
  this._myRoute.navigate(["edit-profile"]); //<-- redirigir a otra página
}

registerUser(name, email, password){
  var data = {"name":name,"email":email,"password": password, "address_id": 1};
  var url = "http://18.224.131.43:443/user"
  console.log("registrando usuario")
  console.log(name, email, password )
  $.post(url, data, (response) => {
      console.log(response);
      alert("se ha guardado un nuevo usuario");
 console.log(email, password);
      this.login(email, password);

    });//post user
}

}
