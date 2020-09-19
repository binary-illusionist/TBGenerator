import { Component, OnInit, ChangeDetectorRef,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SaveDiagComponent } from '@tbgen/modules/toolbar-generator/components/save-diag/save-diag.component';
import { OpenDiagComponent } from '@tbgen/modules/toolbar-generator/components/open-diag/open-diag.component';

@Component({
  selector: 'tbapp-container',
  templateUrl: './tbapp-container.component.html',
  styleUrls: ['./tbapp-container.component.scss']
})
export class TbappContainerComponent implements OnInit {

  public toolbar: Array<Object>;
  public previewtb: Array<Object>;

  constructor(public changeDetectorRef: ChangeDetectorRef, private dialog: MatDialog, private saveDialogRef: MatDialogRef <SaveDiagComponent>, private openDialogRef: MatDialogRef<OpenDiagComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) { }

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



  // clearToolbar(e){
  //   this.toolbar = new Array();
  //   this.previewtb = undefined;
  // }

  appToolbarEvent(e){
    if(e == 'clear'){
      this.toolbar = new Array();
      this.previewtb = undefined;
    } else if(e == 'open'){
      //open diag
      this.dialog.open(OpenDiagComponent, {data: this.toolbar, width: '600px'});
    } else if (e == 'save'){
      //save diag
      this.dialog.open(SaveDiagComponent, {data: this.toolbar, width: '600px'})

    } else{
      //keep silent
    }
  }
}

