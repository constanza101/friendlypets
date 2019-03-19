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
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './auth.guard'


const appRoutes: Routes = [
  //, canActivate: [AuthGuard]

  // OJO: creé un ejemplo para home pero todav. no tengo el componente home:
{path: "home", component: HomeComponent},
{path: "signup", component: SignupComponent},
{path: "login", component: LoginComponent},
{path: "my-animals", component: OwnerAnimalListComponent},
{path: "new-animal", component: RegisterAnimalComponent},
{path: "new-adoption", component: RegisterAnimalAdoptionComponent},
{path: "new-lost", component: RegisterAnimalLostComponent},
{path: "new-found", component: RegisterAnimalFoundComponent},
{path: "place-comments", component: PlaceCommentsComponent},
{path: "place-detail", component: PlaceDetailsComponent},
{path: "places-list", component: PlaceslistComponent},
{path: "map", component: MapComponent},
{path: "new-place", component: PlaceRegisterComponent},
{path: "adoption-list", component: AnimalsAdoptionListComponent},
{path: "found-list", component: AnimalsFoundListComponent},
{path: "lost-list", component: AnimalsLostListComponent},
{path: "adoption-detail", component: AnimalAdoptionDetailComponent},
{path: "myprofile", component: OwnerDetailComponent},

//Las siguientes deben ser las ultimas y en este orden:
//a continuación el componente que veré si no hay extension de la url:
          //{path: "", component: HomeComponent},
//a continuación debería estar el componente de error 404:
            //{path: "**", component: HomeComponent},





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
    OwnerDetailComponent, TermsConditionsComponent, HeaderComponent, FooterComponent // detalle de dueño, dentro un ContactFormComponent y un OwnerAnimalListComponent

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
