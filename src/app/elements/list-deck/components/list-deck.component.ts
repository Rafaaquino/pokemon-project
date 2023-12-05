import { Component, OnInit } from '@angular/core';
import { CadsService } from 'src/app/core/services/cads.service';

@Component({
  selector: 'app-list-deck',
  templateUrl: './list-deck.component.html',
  styleUrls: ['./list-deck.component.css'],
})

export class ListDeckComponent implements OnInit {

  cards: any[] = [];
  c: any;
  myDeck: any[] = [];

  constructor(
    private cardsService: CadsService
  ) {}

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
   this.c =  localStorage.getItem('cards');
   this.cards = JSON.parse(this.c);
  }

  addCard(cardId: string)  {
    console.log('--', cardId);
    if (!this.myDeck.find(item => item.id === cardId)) {
      this.myDeck.push(cardId);
      console.log("my deck",this.myDeck)
    }
  }

}
