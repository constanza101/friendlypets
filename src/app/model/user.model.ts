import { Animal } from './animal.model'
import { Address } from './address.model'


export class User {
  name:string;
  email: string;
  password: string;
  address: Address;
  registeredAnimals: Animal [ ];

  constructor(obj){
    this.name = obj.name;
  }
}
