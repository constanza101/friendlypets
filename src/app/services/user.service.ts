import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string;
  userAddressId: number;
  userCity: string;


  constructor() { }

  getUserDetails(id){
    var urlUser = "http://localhost:8000/user/"+id
    $.get(urlUser, (response) => {
        this.userName = response[0].name;
        this.userAddressId = response[0].address_id;
        var urlAddress = "http://localhost:8000/address/"+this.userAddressId
        $.get(urlAddress, (response) => {
            var city_id = response[0].city_id
            var urlCity = "http://localhost:8000/city/"+city_id
            $.get(urlCity, (response) => {
              console.log(response[0].name);
              this.userCity = response[0].name;
              //  var city_id = response[0].city_id
            })
        })
    });
  }
}
