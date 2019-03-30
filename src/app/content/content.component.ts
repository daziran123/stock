import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    public pageTitle = '';
    public pageDesc = '';
  constructor(public router: Router) {

          router.events.pipe(
            filter(event => event instanceof NavigationEnd))
          .subscribe((event: NavigationEnd) => {
            if (event.url === '/dashboard') {
              this.pageTitle = '这里是首页';
              this.pageDesc = '';
            } else if (event.url.startsWith ('/stock')) {
              this.pageTitle = '股票信息管理';
              this.pageDesc = '惊醒股票信息得皆不能增删';
            }
          });
   }
  ngOnInit() {
  }

}
