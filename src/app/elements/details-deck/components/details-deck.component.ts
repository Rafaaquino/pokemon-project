import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-deck',
  templateUrl: './details-deck.component.html',
  styleUrls: ['./details-deck.component.css'],
})
export class DetailsDeckComponent implements OnInit {

  objetoRecebido: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.objetoRecebido = this.route.snapshot.paramMap.get('id');
    console.log(this.objetoRecebido)
  }
}
