import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
		@Input() pet: Pet;
		@Output() onAdd = new EventEmitter<Pet>();
		displayMore: boolean = false;
		constructor() { }

		ngOnInit() {
		}

		emitAdd(){
				this.onAdd.emit(this.pet);
		}

		showMoreInfo(){
				this.displayMore = true;
		}
}
