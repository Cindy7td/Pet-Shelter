import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PetComponent } from './pet/pet.component';
import { HomeComponent } from './home/home.component';
import { PetsService } from './services/pets.service'
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	PetComponent,
	HomeComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule,
	DialogModule,
	PanelModule
    ],
    providers:[
	PetsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
