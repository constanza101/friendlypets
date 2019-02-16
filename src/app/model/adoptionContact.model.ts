import { User } from './user.model'
import { AnimalAdoption } from './animalAdoption.model'


//para linkear los user con sus animales.
//Idea: que en el perfil del User, aparezcan sus animales.
export class AdoptionContact {

  animal: AnimalAdoption;
  ownerUser: User;
  adoptionUser: User;
  contactDate: Date;
  message: string;


  constructor(animal: AnimalAdoption, ownerUser:User, adoptionUser:User, contactDate:Date, message:string){

    this.animal = animal;
    this.ownerUser = ownerUser;
    this.adoptionUser = adoptionUser;
    this.contactDate = contactDate;
    this.message = message;


  }
}
