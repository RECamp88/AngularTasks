import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number = 0;

  increase(){
    this.number++;
  }

  decrease(){
    this.number--;
  }
}
