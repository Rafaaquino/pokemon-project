import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CreateDeckModule } from './create-deck/create-deck.module';
import { DetaislDeckModule } from './details-deck/details-deck.module';
import { ListDeckModule } from './list-deck/list-deck.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CreateDeckModule,
    DetaislDeckModule,
    ListDeckModule
  ],
  providers: [
  ]
})
export class ElementsModule { }
