import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-global-menu',
  templateUrl: './global-menu.component.html',
  styleUrls: ['./global-menu.component.css'],
})
export class GlobalMenuComponent implements OnInit {
  // currentData="Coffee"

  //   @Output() newItemEvent = new EventEmitter<string>();
  // msg="Hi welcome to child"
  //   addNewItem() {
  //     this.newItemEvent.emit(this.msg);
  //   }
  Force = ['Army', 'Police', 'Navi'];
  @Output() greetEvent = new EventEmitter<any>();

  callGreet() {
    // debugger;
    this.greetEvent.emit(this.Force);
  }
  constructor() {}

  ngOnInit(): void {}
}
