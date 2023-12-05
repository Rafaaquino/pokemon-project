import { Component } from '@angular/core';
import { CadsService } from '../../../core/services/cads.service';
import { AllCardsService } from '../service/allCards.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent {
  title = 'pokedeck';

  constructor(
    private pokemonListService: AllCardsService,
  ) {}

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    this.pokemonListService.getAllCards().subscribe( res => {
      localStorage.setItem('cards', JSON.stringify(res.data));
    },
    error => {
      console.log(error);
    })
  }

}

