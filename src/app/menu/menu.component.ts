import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menus: Array<Menu>;
currentMenuId: number;
  constructor(public router: Router) { }

  ngOnInit() {

  // 初始化赋值
  this.menus = [
    new Menu(1, '首页' , 'dashboard'),
    new Menu(2, '股票管理' , 'stock'),
  ];
  }
  // nav(url: string) {
  // this.router.navigateByUrl(url);
  // }
  nav(menu: Menu) {
    this.router.navigateByUrl(menu.link);
    this.currentMenuId = menu.id;
    }
}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string
  ) {

  }
}
