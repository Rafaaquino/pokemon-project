import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ListDeckComponent } from './components/list-deck.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListDeckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    BadgeModule,
    RouterModule,

  ],
  providers: [
    MessageService
  ]
})
export class ListDeckModule { }
