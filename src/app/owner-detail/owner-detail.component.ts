import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})



export class OwnerDetailComponent implements OnInit {

  constructor(public _user:UserService, public _router: Router) {}



  ngOnInit() {
    var isLogged = localStorage.getItem("userlogged");
    var splitId = isLogged.split("/");
    var id = splitId[0];
    this._user.getUserDetails(id);

  }//OnInit

}
