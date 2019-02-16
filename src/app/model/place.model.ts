
import { PlaceType } from './placeType.model'
import { AnimalType } from './animalType.model'
import { AnimalSize } from './animalSize.model'
import { Address } from './address.model'
import { User } from './user.model'
import { PlaceComment } from './placeComment.model'
import { PlaceUserLog } from './placeUserLog.model'

export class Place {
  type: PlaceType;
  name:string;
  welcomes: AnimalType;
  size: AnimalSize;
  picture: string;
  idCode: number;
  address: Address;
  publishedBy: PlaceUserLog;
  datePublished: Date;
  description: string;
  comment: PlaceComment;


  constructor( type: PlaceType, name:string, welcomes: AnimalType, size: AnimalSize, picture: string, idCode: number, address: Address, publishedBy: PlaceUserLog, datePublished: Date, description: string, comment: PlaceComment,){
    this.type = type;
    this.name = name ;
    this.welcomes = welcomes;
    this.size = size ;
    this.picture = picture ;
    this.idCode = idCode;
    this.address = address;
    this.publishedBy = publishedBy;
    this.datePublished = datePublished;
    this.description = description;
    this.comment = comment;

  }
}
