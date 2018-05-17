import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {
  public rText = 150;
  decrement(e) {
    if (this.rText <= 150 && this.rText > 0) {
      const a = 150 - e.target.value.length;
      return this.rText = a;
    }
    if (this.rText < 0) {
     e.target.value.slice(0 , 150);
    }
  }
  increment(e) {
    if (this.rText < 150) {
      const a = e.target.value.length + 1;
      return this.rText = a;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
