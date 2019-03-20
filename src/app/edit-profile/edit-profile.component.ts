import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  newName: any;
  newEmail: any;
  newPass: any;
  newStreet: any;
  newCityId:any;
  newPostalCode: any;
  userId: any;

  constructor() { }
  ngOnInit() {

}

  newData(){
//get owner id:
    var isLogged = localStorage.getItem("userlogged");
    var splitId = isLogged.split("/");
    var user_id = splitId[0];
     this.userId = user_id;
//data from form:
    //user:
        var name = $('#inputName').val();
        var email = $('#inputEmail').val();
        var password = $('#inputPassword').val();
        var repeatPassword = $('#inputRepeatPassword').val();
    //address:
        var street = $('#inputStreet').val();
        var city = $('#inputCity').val();
        var postalcode = $('#inputPostalCode').val();
//data to update:
    var dataUser = [];
    var dataAddress = [];
    var dataPet = [];


//**********************************************************
//UPDATE PERSONAL DETAILS
//**********************************************************


//UPDATE USER NAME:
   if (name != ""){
     this.newName = name;
     dataUser.push({"key":"name","value":this.newName})
   }
//UPDATE USER EMAIL
   if (email != ""){
     this.newEmail = email;
     dataUser.push({"key":"email","value":this.newEmail})
   }

//UPDATE USER PASSWORD:

    if(password != "" && password != repeatPassword) {
      alert("Passwords Don't Match");
      return false;
    } else if  (password != "" &&  password === repeatPassword){
      alert("passwords match!");
      this.newPass = password;
      dataUser.push({"key":"password","value":this.newPass})
    };

    updateUserDetails(user_id, dataUser);


//**********************************************************
//SET DATA TO UPDATE IN ADDRESS
//**********************************************************

//UPDATE USER STREET
   if (street != ""){
     this.newStreet = street;
     dataAddress.push({"key":"address","value":this.newStreet})
   }

//UPDATE CITY ID: FOR NOW WE ONLY HAVE Barcelona = 1, so:
   if (city != ""){
     if(city == "Barcelona")
     this.newCityId = 1;
     dataAddress.push({"key":"city_id","value":this.newCityId})
   }


 //UPDATE POSTAL CODE
    if (postalcode != ""){
      this.newPostalCode = postalcode;
      console.log(this.newPostalCode)
      dataAddress.push({"key":"postal_code","value":this.newPostalCode})
    }


    updateAddress(user_id, dataAddress);

  }//newData()

}//END TS

//**********************************************************
//DEFINED FUNCTIONS:
//**********************************************************


//define UPDATE PERSONAL DETAILS function
 function updateUserDetails(user_id, dataUser){
    var url = "http://localhost:8000/user/"+user_id

    return $.ajax({
    url: url,
    type: 'PUT',
    success: function(response) {console.log("sucess response updateUserDetails: "+response);},
    data: JSON.stringify(dataUser),
    contentType: "application/json"
    });
}//end API call



//define UPDATE ADDRESS DETAILS function:
function updateAddress(user_id, dataAddress){
   var url = "http://localhost:8000/user_address/"+user_id;
  //console.log("user_id en updateAddress(): "+user_id)
  //console.log("dataAddress en updateAddress(): "+dataAddress)

   return $.ajax({
   url: url,
   type: 'PUT',
   success: function(response) {console.log("success response en updateAddress"+response);},
   data: JSON.stringify(dataAddress),
   contentType: "application/json"
   });
}//end API call
