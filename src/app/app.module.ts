import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OwnerAnimalListComponent } from './owner-animal-list/owner-animal-list.component';
import { RegisterAnimalComponent } from './register-animal/register-animal.component';
import { RegisterAnimalAdoptionComponent } from './register-animal-adoption/register-animal-adoption.component';
import { RegisterAnimalLostComponent } from './register-animal-lost/register-animal-lost.component';
import { RegisterAnimalFoundComponent } from './register-animal-found/register-animal-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PlaceCommentsComponent } from './place-comments/place-comments.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { PlaceslistComponent } from './placeslist/placeslist.component';
import { MapComponent } from './map/map.component';
import { PlaceRegisterComponent } from './place-register/place-register.component';
import { AnimalsAdoptionListComponent } from './animals-adoption-list/animals-adoption-list.component';
import { AnimalsFoundListComponent } from './animals-found-list/animals-found-list.component';
import { AnimalsLostListComponent } from './animals-lost-list/animals-lost-list.component';
import { AnimalAdoptionDetailComponent } from './animal-adoption-detail/animal-adoption-detail.component';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';

const appRoutes: Routes = [
  // OJO: creé un ejemplo para home pero todav. no tengo el componente home:
{path: "home", component: HomeComponent},
//a continuación el componente que veré si no hay extension de la url:
{path: "", component: HomeComponent},
//a continuación debería estar el componente de error 404:
{path: "**", component: HomeComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    OwnerAnimalListComponent, //lista de mascotas dentro del perfil del dueño
    RegisterAnimalComponent, //componente para registrar características básicas de Animal
    RegisterAnimalAdoptionComponent, // Extiende Animal - para adopcion
    RegisterAnimalLostComponent, //extiende animal con detalles del momemto de pérdida.
    RegisterAnimalFoundComponent, //para registrar un animal que se ha encontrado y agregarlo a la lista/mapa
    ContactFormComponent, //estará en el detalle del perro, incluyendo un ID para que sepamos a qué perro se refiere. También podrá estar en el perfil del usuario Dueño.
    PlaceCommentsComponent,//lista de comentarios y también el textarea que se vinculará al usuario que lo escribe y la hora/fecha.
    PlaceDetailsComponent,//detalles sobre el establecimiento.
    PlaceslistComponent, //listado de establecimientos
    MapComponent,
    PlaceRegisterComponent, //formulario para registrar establecimientos
    AnimalsAdoptionListComponent, //listado de anim en adopción
    AnimalsFoundListComponent, //listado de animales encontrados ordenados por distancia.
    AnimalsLostListComponent, //listado de animales perdidos ordenados x distancia
    AnimalAdoptionDetailComponent,//detalle del animal en adopción, tendrá adentro un componente de ContactFormComponent
    OwnerDetailComponent // detalle de dueño, dentro un ContactFormComponent y un OwnerAnimalListComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
