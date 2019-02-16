import { Animal } from './animal.model'

export class AnimalAdoption extends Animal {

  compatibles:string // o array?? perros, gatos, niños.
  care : string // o array?? (tranquilo, muy activo, atención especial)

  constructor (obj:object, compatibles:string, care: string){
    super(obj);
    this.compatibles = compatibles;
    this.care = care;
  }
}
