
import { AnimalType } from './animalType.model'

export class AnimalSize {
  name:string; //(small/medium/large)
  type: AnimalType;
  minWeight: number
  maxWeight: number

  constructor(name:string, type:AnimalType, minWeight:number, maxWeight:number){
    this.name = name;
    this.type = type;
    this.minWeight = minWeight;
    this.maxWeight = maxWeight;

  }
}
