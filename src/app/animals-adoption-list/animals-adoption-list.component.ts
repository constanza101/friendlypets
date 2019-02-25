import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-adoption-list',
  templateUrl: './animals-adoption-list.component.html',
  styleUrls: ['./animals-adoption-list.component.scss']
})
export class AnimalsAdoptionListComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {


    //Style:
        const cards = document.querySelectorAll(".card");
        function transition() {
          if (this.classList.contains("active")) {
            this.classList.remove("active");
          } else {
            this.classList.add("active");
          }
        }
        cards.forEach(card => card.addEventListener("click", transition));




  }

}
