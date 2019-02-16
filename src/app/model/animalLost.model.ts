import { Animal } from './animal.model'

export class AnimalLost extends Animal {

dateLost: Date;
datePublished: Date;
areaLost: Address;


  constructor (dateLost, datePublished, care: string){
    super(obj);
    this.dateLost: Date = dateLost;
    this.datePublished: Date = datePublished;
    this.areaLost: Address = areaLost;
  }
}
