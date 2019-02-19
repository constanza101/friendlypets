import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalService } from '../services/animal.service';



@Component({
  selector: 'app-owner-animal-list',
  templateUrl: './owner-animal-list.component.html',
  styleUrls: ['./owner-animal-list.component.scss']
})
export class OwnerAnimalListComponent implements OnInit {

//ngFor no funciona sin esta variable.
// animals: Animal[] = ;

  constructor(/*public _animalService: AnimalService*/) {
    //this.animals = _animalService.animals;

  }

  ngOnInit() {

    // Buscar datos del servicio y dejarlos en el array

  }

}
