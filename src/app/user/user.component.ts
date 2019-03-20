import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public _user:UserService, public _router: Router, public _actRoute: ActivatedRoute) {}

  ngOnInit() {

    this._actRoute.paramMap.subscribe(params => {
      var id = params.get("user_id")
      console.log(id)
      this._user.getUserDetails(id);
    })
  }
}
