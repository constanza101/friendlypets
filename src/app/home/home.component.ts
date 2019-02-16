import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal.model';
import { AnimalType } from '../model/animalType.model';
import { AnimalAdoption } from '../model/animalAdoption.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let animalType:AnimalType = new AnimalType("perro");

    let animal1 = new Animal({name:"shiva", type: animalType});



    let animalAdoption1 = new AnimalAdoption( {name:"shiva", type: animalType} , "perros", "special care");

    alert(JSON.stringify(animalAdoption1));

console.log(animalAdoption1);


    //animal1.name = "shiva";
    //animal1.setName("shiva");
    alert( JSON.stringify(animal1) );
    //{"name":"shiva","type":{"name":"perro"}}
    //alert(animal1.name);

  }
}
