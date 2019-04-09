import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: number;
  increment: number = 0;
  @Output() incrEmitter = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {this.add();}, 1000);
  }

  onStop() {
    clearInterval(this.interval);
    this.increment = 0;
  }

  add() {
    this.incrEmitter.emit(this.increment++);
  }
}
