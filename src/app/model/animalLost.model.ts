import { Animal } from './animal.model'
import { Address } from './address.model'

export class AnimalLost extends Animal {

dateLost: Date;
datePublished: Date;
areaLost: Address;


  constructor (obj, dateLost, datePublished, care: string, areaLost: Address){
    super(obj);
    this.dateLost = dateLost;
    this.datePublished = datePublished;
    this.areaLost = areaLost;
  }
}
