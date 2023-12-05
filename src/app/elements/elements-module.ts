import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CreateDeckModule } from './create-deck/create-deck.module';
import { DetaislDeckModule } from './details-deck/details-deck.module';
import { ListDeckModule } from './list-deck/list-deck.module';
import { ElementsComponent } from './home/components/elements.component';
import { AllCardsService } from './home/service/allCards.service';


@NgModule({
  declarations: [
    ElementsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CreateDeckModule,
    DetaislDeckModule,
    ListDeckModule
  ],
  providers: [
    AllCardsService
  ]
})
export class ElementsModule { }
