import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }


private stocks: Stock[]  = [
  new Stock(1, '第一支股票', 1.99, 1.5, '这是第一只股票', ['iT', '互联网']),
  new Stock(2, '第二支股票', 2.99, 2.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
  new Stock(3, '第三支股票', 3.99, 3.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
  new Stock(4, '第四支股票', 4.99, 4.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
  new Stock(5, '第五支股票', 5.99, 3.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
  new Stock(6, '第六支股票', 6.99, 2.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
  new Stock(7, '第七支股票', 7.99, 4.5, '这是第一只股票，入市有风险', ['iT', '互联网']),
];

getStocks(): Stock[] {
  return this.stocks;
}


getStock(id: number): Stock {
  // return this.stocks.find(stock => stock.id == id);
  // tslint:disable-next-line:no-shadowed-variable
  let stock = this.stocks.find(stock => stock.id == id);
  if (!stock) {
    stock = new Stock(0, '', 0 , 0, '', []);
  }
  return  stock;
}




}



export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>

  ) {}
}
