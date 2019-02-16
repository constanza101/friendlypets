import { Injectable } from '@angular/core';
import { AnimalAdoption } from '../model/animalAdoption.model';
import { Animal } from '../model/animal.model';
import { AnimalType } from '../model/animalType.model';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animalsAdoption: AnimalAdoption[];

  constructor() {
    let animalType:AnimalType = new AnimalType("perro");
    let animalAdoption1 = new AnimalAdoption( {name:"shiva", type: animalType} , "perros", "special care");
    this.saveAnimal(animalAdoption1);
 }

  saveAnimal(animalAdoption:AnimalAdoption){
    this.animalsAdoption.push(animalAdoption);

  }


}
