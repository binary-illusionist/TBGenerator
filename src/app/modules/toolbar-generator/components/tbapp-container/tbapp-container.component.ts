import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'tbapp-container',
  templateUrl: './tbapp-container.component.html',
  styleUrls: ['./tbapp-container.component.scss']
})
export class TbappContainerComponent implements OnInit {

  public toolbar: Array<Object>;
  public previewtb: Array<Object>;

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.toolbar = new Array();
  }

  updateToolbar(e) {
    let p = new Array();
    if (e !== undefined && e.length !== 0){
      p = e;
      this.previewtb = p;
    }
    else{
      // console.log(e);
    }
  }

  clearToolbar(e){
    this.toolbar = new Array();
    this.previewtb = undefined;
  }
}

