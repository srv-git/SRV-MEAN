import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../../shared/table/table.component';
import { CardService } from '../../../core/services/card.service';

@Component({
  selector: 'app-cards',
  imports: [TableComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  cardData: any;
  tableTitle: string = 'All Cards';
  tableDescription: string = 'Its all about the saved cards list.';
  tableColumns: string[] = ['_id', 'name', 'number', 'cvv', 'expiry'];
  constructor(readonly cardService: CardService) {}

  ngOnInit() {
    this.cardService.getAllCards().subscribe((data) => {
      console.log(data);
      this.cardData = data;
    });
  }
}
