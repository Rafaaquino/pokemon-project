import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CreateDeckComponent } from './components/create-deckCardcomponent';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateDeckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [

  ]
})
export class CreateDeckModule { }
