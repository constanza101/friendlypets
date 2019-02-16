import { City } from './city.model'

export class Address {

  address: string;
  city: City;
  postalCode: number; //o string?

  constructor (address:string, city:City , postalCode:number){
    this.address = address;
    this.city = city;
    this.postalCode = postalCode;
  }
}
