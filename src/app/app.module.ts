import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
