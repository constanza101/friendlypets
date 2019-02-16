
import { Place } from './place.model'
import { User } from './user.model'

export class PlaceUserLog {


  linkDate: Date;
  place: Place;
  user: User;

  constructor(linkDate, place, user ){
    this.linkDate = linkDate;
    this.place = place ;
    this.user = user;

  }
}
