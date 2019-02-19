import { Animal } from './animal.model'
import { Address } from './address.model'

export class AnimalFound extends Animal {

dateFound: Date;
datePublished: Date;
areaFound: Address;


  constructor (obj, dateFound, datePublished, care: string, areaFound:Address){
    super(obj);
    this.dateFound = dateFound;
    this.datePublished = datePublished;
    this.areaFound = areaFound;
  }
}
