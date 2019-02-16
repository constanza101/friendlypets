import { AnimalType } from './animalType.model'
import { AnimalGender } from './animalGender.model'
import { AnimalSize } from './animalSize.model'
import { AnimalBreed } from './animalBreed.model'
import { User } from './user.model'
import { Status } from './status.model'



export class Animal {

  type: AnimalType;
  name:string;
  picture: string;
  birthDate: Date;
  gender: AnimalGender;
  size: AnimalSize;
  breed: AnimalBreed;
  idCode: number;
  owner: User;
  status: string; //ENUM: ["default","adoption", "lost", "found"]
  description: string

//TODO: ver que tipo paso aqui. (Animal o object)???
  constructor(obj){
    this.name = obj.name;
    this.type = obj.type;
  }

  setPicture(pic:string){
    this.picture = pic;
  }

  getPicture() {
    return this.picture;
  }



}
