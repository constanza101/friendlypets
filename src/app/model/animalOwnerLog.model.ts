import { User } from './user.model'
import { Animal } from './animal.model'


//para linkear los user con sus animales.
//Idea: que en el perfil del User, aparezcan sus animales.
export class AnimalOwnerLog {

  animal: Animal;
  owner: User;
  linkDate: Date;


  constructor(animal: Animal, owner:User, linkDate:Date){
    this.animal = animal;
    this.owner = owner;
    this.linkDate = linkDate;
  }
}
