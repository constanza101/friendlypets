import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})

export class OwnerDetailComponent implements OnInit {
  users: [];
  usersList: [User];

  constructor() {
//    this.usersList = [User];

  }

  ngOnInit() {
    /*
    alert("funciona!")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        this.users = JSON.parse(xhttp.responseText);
        console.log(this.users);
        for (let i=0; i < this.users.length; i++) {
          this.usersList.push(new User(this.users[i]));
        }
        console.log(this.usersList);
      }
    };
    xhttp.open("GET", "http://localhost:8000/users", true);
    xhttp.send();
    */


  }

}
