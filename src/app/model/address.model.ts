import { City } from './city.model'

export class Address {

  address: string;
  city: City;
  postalCode: string; // string porque hay ceros a la izquierda

  constructor (address:string, city:City , postalCode:string){
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
  }
}
