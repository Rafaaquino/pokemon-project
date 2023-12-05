import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateDeckComponent } from "./elements/create-deck/components/create-deck.component";
import { ListDeckComponent } from "./elements/list-deck/components/list-deck.component";
import { DetailsDeckComponent } from "./elements/details-deck/components/details-deck.component";
import { ElementsComponent } from "./elements/home/components/elements.component";

const routes: Routes = [
  { path: '',component: ElementsComponent },
  { path: 'criar', component: CreateDeckComponent},
  { path: 'lista', component: ListDeckComponent},
  { path: 'detalhes', component: DetailsDeckComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
