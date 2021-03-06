import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  // @Output()
  // private cleartoolbar: EventEmitter<any> = new EventEmitter();

  @Output()
  private appToolbarEvent: EventEmitter<any> = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  newToolbar(){
    this.appToolbarEvent.emit('clear');
  }

  saveToolbar(){
    this.appToolbarEvent.emit('save');
  }

  openToolbar(){
    this.appToolbarEvent.emit('open');
  }

}
