import { Animal } from './animal.model'
import { Address } from './address.model'
import { Care } from './care.model'
import { Compatible } from './compatible.model'

export class AnimalAdoption extends Animal {

  compatible:string; // o array?? perros, gatos, niños.
  care : string; // o array?? (tranquilo, muy activo, atención especial)
  location: Address;

  constructor (obj:object, compatible:string, care: string, location: Address){
    super(obj);
    this.compatible = compatible;
    this.care = care;
    this.location = location;
  }
}
