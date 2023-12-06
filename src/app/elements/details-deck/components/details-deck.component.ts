import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckCards } from '../../create-deck/model/deck.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details-deck',
  templateUrl: './details-deck.component.html',
  styleUrls: ['./details-deck.component.css'],
})
export class DetailsDeckComponent implements OnInit {
  deckCards: any[] = [];
  actualCards: DeckCards[] = [];
  paramsId: any;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramsId = this.route.snapshot.paramMap.get('id');
    this.getDeckCards(this.paramsId)
  }

  getDeckCards(id: any) {
    this.deckCards = JSON.parse(localStorage.getItem('deckCards') || '');
    this.actualCards = [this.deckCards.find(item => item.id == id)]
  }

  removeCards(id: any) {
    if(this.actualCards[0].cards.length <= 24){
      this.warnAdd();
    }
    else {
      for (const deck of this.actualCards) {
        const cardIndex = deck.cards.findIndex(card => card.id === id);
        if (cardIndex !== -1) {
          deck.cards.splice(cardIndex, 1);
          break;
        }
      }
    }

    localStorage.setItem('deckCards', JSON.stringify(this.deckCards));
  }

  warnAdd() {
    this.messageService.add({severity:'warn', summary:'Ops!', detail:'Você não pode ter menos de 24 cartas'});
  }
}
