import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { PetsService } from '../services/pets.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
		pets: Array<Pet>;
		constructor(private petsService: PetsService) {
				this.pets = petsService.all();
		}

  ngOnInit() {
  }

		addPet(){
				
		}
}
