import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { CadsService } from 'src/app/core/services/cads.service';
import { ICard } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-list-deck',
  templateUrl: './list-deck.component.html',
  styleUrls: ['./list-deck.component.css'],
})

export class ListDeckComponent implements OnInit {

  cards: ICard[] = [];
  c: any;
  myDeck: ICard[] = [];


  constructor(
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
   this.cards = JSON.parse( localStorage.getItem('cards') || '{}')
  }

  addCard(cardId: ICard)  {
    if (!this.myDeck.find(item => item.id === cardId.id)) {
      if(this.myDeck.length >= 60) {
        this.errorAdd();
      }
      else {
        this.myDeck.push(cardId);
      }
    }
    else {
      this.duplicateAdd();
    }
  }

  addDeck() {
    if(this.myDeck.length <= 20){
      this.warnAdd();
    }
    else {
      localStorage.setItem('myDecks', JSON.stringify(this.myDeck));
      this.succesAdd();
      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 1500)

    }

  }

  duplicateAdd() {
    this.messageService.add({severity:'info', summary:'Ops!', detail:'Você ja adicionou esse card! Escolha outro'});
  }

  succesAdd() {
    this.messageService.add({severity:'success', summary:'Eba!', detail:'Cartas adicionada com sucesso!'});
  }

  warnAdd() {
    this.messageService.add({severity:'warn', summary:'Ops!', detail:'Você precisa adicionar no min 20 cartas'});
  }

  errorAdd() {
    this.messageService.add({severity:'error', summary:'Ops!', detail:'Você ja atingiu o limite de 60 cartas'});
  }
}
