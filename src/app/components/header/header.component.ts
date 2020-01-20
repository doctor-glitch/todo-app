import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Output() sendData = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  headerClicked(){
    this.sendData.emit(1);
  }
}
