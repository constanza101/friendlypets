import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-placeslist',
  templateUrl: './placeslist.component.html',
  styleUrls: ['./placeslist.component.scss']
})
export class PlaceslistComponent implements OnInit {

  myPosition: object = {
    "lat":41.385063,
    "lng": 2.173404
  }

  newPlacelat: number;
  newPlacelong: number;

  markers: object[] = [];

  isMobile: boolean = false;

  constructor(public _router: Router) {}

  ngOnInit() {
    this.detectIfMobile();
    window.onresize = () => { this.detectIfMobile(); };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            this.myPosition['lat'] = position.coords.latitude;
            this.myPosition['lng'] = position.coords.longitude;
        },
        (error) => {
            console.log("Error: ", error)
        });
    }
    this.getPlaces();
  }

  getPlaces(){
    var urlPlaces = "http://18.224.131.43:443/places";
    $.get(urlPlaces, (response) => {
        this.markers = response;
      })
  }

  showModal(){
    $('#addPlaceModal').show();
    $('#background-modal').show();
  }

  closeModal(){
    $('#addPlaceModal').hide();
    $('#background-modal').hide();
  }

  handleClick($event){
    console.log("cualquier cosa")
    //setea las coordenadas del nuevo lugar
    this.newPlacelat = $event.coords.lat;
    this.newPlacelong = $event.coords.lng;
    //abre el modal
    this.showModal();
  }

  addPlace(){
    var url = "http://18.224.131.43:443/place"
    var latitude = this.newPlacelat;
    var longitude = this.newPlacelong;
    var inputName = $('#inputName').val();
    var inputDescription = $('#inputDescription').val();

    var dataPlace = {
      'latitude': latitude,
      'longitude': longitude,
      "address_id": 1,
      "picture": "url2", //TODO: añadir servicio de fotos
      "name": inputName,
      "description": inputDescription
    }

    $.post(url, dataPlace, (response) => {
        console.log(response);
        alert("se ha guardado un nuevo lugar");
        this.closeModal();
        this.getPlaces();
      });//post place

  }

  detectIfMobile(){
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    console.log('I am '+ this.isMobile)
  }

}
