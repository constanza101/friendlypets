import { Injectable } from '@angular/core';
import { AnimalAdoption } from '../model/animalAdoption.model';
import { Animal } from '../model/animal.model';
import { AnimalType } from '../model/animalType.model';
import { AnimalLost } from '../model/animalLost.model';
import { AnimalFound } from '../model/animalFound.model';
import { Address } from '../model/address.model';
import { City } from '../model/city.model';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animals: Animal[];
  animalsAdoption: AnimalAdoption[];
  animalsLost: AnimalLost[];
  animalsFound: AnimalFound[];

  constructor() {

    
/*
    let animalType:AnimalType = new AnimalType("perro");
    let animalAdoption1 = new AnimalAdoption( {name:"shiva", type: animalType} ,
    "perros", "special care", new Address("Calle Pallars 43",new City("Barcelona"),"08032") );
    this.saveAnimal(animalAdoption1);

    let animalAdoption2 = new AnimalAdoption( {name:"scooby", type: animalType} ,
    "kids", "special care", new Address("Calle Pallars 88",new City("Barcelona"),"08032") );
    this.saveAnimal(animalAdoption2);

    this.animals = this.animalsAdoption;
*/
 }

  saveAnimal(animalAdoption:AnimalAdoption){
    //this.animalsAdoption.push(animalAdoption);

  }


}
