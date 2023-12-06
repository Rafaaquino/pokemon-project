import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ICard } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-list-deck',
  templateUrl: './list-deck.component.html',
  styleUrls: ['./list-deck.component.css'],
})

export class ListDeckComponent implements OnInit {
  deckCards: any[] = [];
  cards: ICard[] = [];
  myCards: ICard[] = [];
  id: any;


  constructor(
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllCards();
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDeckCards()
  }


  getAllCards() {
   this.cards = JSON.parse( localStorage.getItem('cards') || '');
  }

  getDeckCards() {
    this.deckCards = JSON.parse(localStorage.getItem('deckCards') || '');
  }

  addCard(cardId: ICard)  {
    const idDeckCard = this.deckCards.find(item => item.id == this.id)

    if (!idDeckCard.cards.find((item: any) => item.id === cardId.id)) {
      if(idDeckCard.cards.length >= 60) {
        this.errorAdd();
      }
      else {
        idDeckCard.cards.push(cardId);
      }
    }
    else {
      this.duplicateAdd();
    }
  }

  addDeck() {
    const idDeckCard = this.deckCards.find(item => item.id == this.id)
    if(idDeckCard.cards.length <= 23){
      this.warnAdd();
    }
    else {
      this.addCardDek(this.deckCards, this.id);
      this.succesAdd();
      setTimeout(() => {
        this.router.navigateByUrl('/baralhos')
      }, 1500)

    }
  }

  addCardDek(deck: any[], id: any): void {
    const idDeckCard = deck.find(item => item.id == id)
    idDeckCard.cards.push(this.myCards);
    localStorage.setItem('deckCards', JSON.stringify(this.deckCards));
  }

  duplicateAdd() {
    this.messageService.add({severity:'info', summary:'Ops!', detail:'Você ja adicionou esse card! Escolha outro'});
  }

  succesAdd() {
    this.messageService.add({severity:'success', summary:'Eba!', detail:'Cartas adicionada com sucesso!'});
  }

  warnAdd() {
    this.messageService.add({severity:'warn', summary:'Ops!', detail:'Você precisa adicionar no min 24 cartas'});
  }

  errorAdd() {
    this.messageService.add({severity:'error', summary:'Ops!', detail:'Você ja atingiu o limite de 60 cartas'});
  }
}
