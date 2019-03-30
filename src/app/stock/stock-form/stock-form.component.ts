import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock-manage/stock-manage.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
   stock: Stock;
  constructor() { }

  ngOnInit() {

    this.stock =  new Stock(1, '第一支股票', 1.99, 1.5, '这是第一只股票，入市有风险', ['iT', '互联网']);

  }

}
