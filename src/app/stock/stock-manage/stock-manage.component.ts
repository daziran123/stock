import { StockService, Stock } from './../stock.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { StockPipe } from '../stock.pipe';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.scss']
})
export class StockManageComponent implements OnInit {
private stocks: Array<Stock>;
private nameFilter: FormControl = new FormControl();
private keyword: string;
  constructor(public router: Router, private stockService: StockService) { }

  ngOnInit() {
    // 页面初始化被调用
    // this.stocks = [
    //   new Stock(1, '第一支股票', 1.99, 1.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
    //   new Stock(2, '第二支股票', 2.99, 2.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
    //   new Stock(3, '第三支股票', 3.99, 3.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
    //   new Stock(4, '第四支股票', 4.99, 4.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
    //   new Stock(5, '第五支股票', 5.99, 3.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
    //   new Stock(6, '第六支股票', 6.99, 2.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
    //   new Stock(7, '第七支股票', 7.99, 4.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
    // ];

    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => this.keyword = value);
  }
  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
      this.router.navigateByUrl('/stock/' + stock.id);
  }
}


// export class Stock {
//   constructor(
//     public id: number,
//     public name: string,
//     public price: number,
//     public rating: number,
//     public desc: string,
//     public categories: Array<string>

//   ) {}
// }
