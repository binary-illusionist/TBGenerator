import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { AdditemDiagComponent } from '@tbgen/modules/toolbar-generator/components/additem-diag/additem-diag.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'slick-toolbar',
  templateUrl: './slick-toolbar.component.html',
  styleUrls: ['./slick-toolbar.component.scss']
})
export class SlickToolbarComponent implements OnInit {

  @Input()
  public toolbar: Array<Object>;

  @Output()
  tbUpdateEvent: EventEmitter<Array<Object>> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addItemDiagOpen() {
    const dialogRef = this.dialog.open(AdditemDiagComponent, { data: this.toolbar, width: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
      if (result !== undefined) {
        this.toolbar = result;
        this.tbUpdateEvent.emit(this.toolbar);
      }
    });
  }
}
