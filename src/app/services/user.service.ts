import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string;
  userAddressId: number;
  userCity: string;
  userJoinedDay: number;
  userJoinedMonth: number;
  userJoinedYear: number;
  userEmail: string;
  userPets: [];


  constructor() { }



  getUserDetails(id){
    var urlUser = "http://18.224.131.43:443/user/"+id
    $.get(urlUser, (response) => {
        this.userName = response[0].name;
        this.userAddressId = response[0].address_id;
        this.userEmail = response[0].email;
        console.log(this.userEmail);
//get date:
        var creation_date = response[0].creation_date;
        var myDate = new Date(creation_date);
        this.userJoinedDay = myDate.getDate();
        this.userJoinedMonth = myDate.getMonth()+1;
        this.userJoinedYear = myDate.getFullYear();


        var urlAddress = "http://18.224.131.43:443/address/"+this.userAddressId
        $.get(urlAddress, (response) => {
            var city_id = response[0].city_id
            var urlCity = "http://18.224.131.43:443/city/"+city_id
            $.get(urlCity, (response) => {
              this.userCity = response[0].name;
            })//$.get(urlCity)
        })//$.get (urlAddress)
    });//$.get(urlUser)
    var urlMyPets = "http://18.224.131.43:443/animals/"+id

    $.get(urlMyPets, (response) => {
        console.log(response)
        this.userPets = response;

        console.log()
        console.log()
        })//$.get(urlMyPets)
  }//getUserDetails(id)
}
