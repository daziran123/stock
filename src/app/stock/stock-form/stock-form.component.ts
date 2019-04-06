import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {StockService, Stock } from './../stock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit {
   stock: Stock;

  //  2通过id  获得股票信息，id 是从哪来的
  constructor(
     private routeInfo: ActivatedRoute,
     private stockService: StockService,
     private router: Router) { }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
  // 通过serveice 获取信息 1
    // this.stock =  new Stock(1, '第一支股票', 1.99, 1.5, '这是第一只股票，入市有风险', ['iT', '互联网']);
       this.stock = this.stockService.getStock(stockId);
  }
  cancel() {
    this.router.navigateByUrl('/stock');
  }
  save() {
    this.router.navigateByUrl('/stock');
  }
}
