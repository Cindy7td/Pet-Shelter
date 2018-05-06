import { Injectable } from '@angular/core';
import { Pet } from '../models/pet';

@Injectable()
export class PetsService {

  constructor() { }

		all(): Array<Pet> {
				return [
						<Pet>{
								image: "assets/images/perro3.jpg",
								name: "Solovino",
								breed: "Raza",
								size: "Tamaño",
								character: "Caracter",
								age: "Edad",
								needs: "Necesidades",
								health_information: "Información Sanitaria",
								tipo: "Perro"
						},
						<Pet>{
								image: "assets/images/perro.jpg",
								name: "Solosefue",
								breed: "Raza",
								size: "Tamaño",
								character: "Caracter",
								age: "Edad",
								needs: "Necesidades",
								health_information: "Información Sanitaria",
								tipo: "Perro"
						},
						<Pet>{
								image: "assets/images/gato (4).jpg",
								name: "Gaton",
								breed: "Raza",
								size: "Tamaño",
								character: "Caracter",
								age: "Edad",
								needs: "Necesidades",
								health_information: "Información Sanitaria",
								tipo: "Gato"
						},
						<Pet>{
								image: "assets/images/gato (1).jpg",
								name: "Gatin",
								breed: "Raza",
								size: "Tamaño",
								character: "Caracter",
								age: "Edad",
								needs: "Necesidades",
								health_information: "Información Sanitaria",
								tipo: "Gato"
						},
						<Pet>{
								image: "assets/images/perro2.jpg",
								name: "Gordon",
								breed: "Raza",
								size: "Tamaño",
								character: "Caracter",
								age: "Edad",
								needs: "Necesidades",
								health_information: "Información Sanitaria",
								tipo: "Gato"
						}						
				];
		}
}
