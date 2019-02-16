import { Animal } from './animal.model'
import { Compatible } from './compatible.model'
import { Care } from './care.model'
import { Address } from './address.model'


export class AnimalAdoption extends Animal {

  compatible:Compatible; // o array?? perros, gatos, niños.
  care : Care; // o array?? (tranquilo, muy activo, atención especial)
  location: Address;

  constructor (obj:object, compatible:string, care: string, location: Address){
    super(obj);
    this.compatible = compatible;
    this.care = care;
    this.location = location;
  }
}
