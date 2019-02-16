import { User } from './user.model'
import { Place } from './place.model'

export class PlaceComment {

place: Place;
comment: string;
score: number;
writtenBy: User;
datePublished: Date;


  constructor(place: Place, comment: string, score:number, writtenBy:User, datePublished:Date){
    this.place = place;
    this.comment = comment;
    this.score = score;
    this.writtenBy = writtenBy;
    this.datePublished = datePublished
  }
}
