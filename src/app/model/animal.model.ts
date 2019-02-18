import { AnimalType } from './animalType.model'
import { AnimalGender } from './animalGender.model'
import { AnimalSize } from './animalSize.model'
import { AnimalBreed } from './animalBreed.model'
import { User } from './user.model'
import { Status } from './status.model'



export class Animal {

  name:string;
  type: AnimalType;
  picture: string;
  birthDate: Date;
  gender: AnimalGender;
  size: AnimalSize;
  breed: AnimalBreed;
  idCode: number;
  owner: User;
  status: Status; //ENUM: ["default","adoption", "lost", "found"]
  description: string




//TODO: ver que tipo paso aqui. (Animal o object)???
  constructor(obj){
    this.name = obj.name;
    this.type = obj.type;
    this.picture = obj.picture;
    this.birthDate = obj.birthDate;
    this.gender = obj.gender;
    this.breed = obj.breed;
    this.idCode = obj.idCode;
    this.owner = obj.owner;
    this.status = obj.status;
    this.description = obj.description;
    this.size = obj.size;




  }

  setPicture(pic:string){
    this.picture = pic;
  }

  getPicture() {
    return this.picture;
  }



}
