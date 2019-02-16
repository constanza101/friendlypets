import { Animal } from './animal.model'

export class AnimalFound extends Animal {

dateFound: Date;
datePublished: Date;
areaFound: Address;


  constructor (dateFound, datePublished, care: string){
    super(obj);
    this.dateFound: Date = dateFound;
    this.datePublished: Date = datePublished;
    this.areaFound: Address = areaFound;
  }
}
