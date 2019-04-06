import { Component, OnInit, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
@Input()
rating = 0;
stars: boolean[];

@Output()
ratingChange: EventEmitter<number> = new EventEmitter();
// 把改变后的数据发射出去
@Input()
readonly = true;


  constructor() { }

  ngOnInit() {
  }
// tslint:disable-next-line:use-life-cycle-interface
ngOnChanges(changes: SimpleChanges): void {
  this.stars = [];
  for (let i = 1; i <= 5; i++) {
    this.stars.push(i > this.rating);
  }
}

  clickStar(index: number) {
    if (!this.readonly) {
   this.rating = index + 1;
  //  this.stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     this.stars.push(i > this.rating);
  //   }  移至change 钩子
    this.ratingChange.emit(this.rating);
    // 发射 ，有外边 捕获（双向绑定）
  }}
}
