import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DetailsDeckComponent } from './components/details-deck.component';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailsDeckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastModule
  ],
  providers: [

  ]
})
export class DetaislDeckModule { }
