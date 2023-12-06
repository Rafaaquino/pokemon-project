import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-create-deckCard',
  templateUrl: './create-deckCard.component.html',
  styleUrls: ['./create-deckCard.component.css'],
})
export class CreateDeckComponent implements OnInit {
  deckCards: any[] = [];
  nameDeckCard: string = '';

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.verifyDeckCards();
  }

  addDeckCards() {
    const newDeckCard = {
      id: Number(this.createId()),
      name: this.nameDeckCard || 'Sem Nome',
      cards: []
    };

    this.deckCards.push(newDeckCard);
    console.log( this.deckCards)
    localStorage.setItem('deckCards', JSON.stringify(this.deckCards));
    this.nameDeckCard = '';
  }

  navigateDetails(id: number): void {
    this.router.navigate(['/detalhes', id]);
  }

  addCards(id: number) {
    this.router.navigate(['/lista', id]);
  }

  removeCards(baralhoId: number) {
    this.deckCards = this.deckCards.filter(item => item.id !== baralhoId);
    localStorage.setItem('deckCards', JSON.stringify(this.deckCards));
  }

  verifyDeckCards() {
    if(this.localStorageService.hasItem('deckCards')) {
        this.deckCards = JSON.parse( localStorage.getItem('deckCards') || '{}')
    }
  }

  private createId(): number {
    return new Date().getTime();
  }
}
