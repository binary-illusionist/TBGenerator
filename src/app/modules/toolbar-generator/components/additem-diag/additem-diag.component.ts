import { Component, Inject, OnInit, inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ToolbarGeneratorService } from '@tbgen/modules/toolbar-generator/services/toolbar-generator.service';
import { SelIconDiagComponent } from '@tbgen/modules/toolbar-generator/components/selicon-diag/selicon-diag.component';

@Component({
  selector: 'additem-diag',
  templateUrl: './additem-diag.component.html',
  styleUrls: ['./additem-diag.component.scss']
})
export class AdditemDiagComponent implements OnInit {
  public iconList: Array<string>;
  private diagform: FormGroup;
  public selicons: any = {};
  public selectedicon: string;
  public tbcolor: any;
  public tbicon: any;
  public tblabel: any;
  @Input()
  private toolbar: Array<Object>;
  private tblen: number;
  public allmaticons: any;

  constructor(public dialog: MatDialog, private fb: FormBuilder,
    private dialogRef: MatDialogRef<AdditemDiagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public tbservice: ToolbarGeneratorService) {
    this.diagform = fb.group({
      tbicon: [""],
      tblabel: [""],
      tbiconsize: [""],
      tbcolor: [""]
    });
    console.log(data);
    this.toolbar = data;
  }

  ngOnInit() {
    this.selicons = {};
    this.tbcolor = "#000000";
    this.tblabel = '';
    console.log(this.toolbar.length);
    if (this.toolbar !== undefined && this.toolbar.length !== 0) {
      this.tblen = this.toolbar.length;
    } else {
      this.tblen = 0;
    }
    this.iconList = [];
    this.populateIconList();

  }

  populateIconList() {
    if (this.iconList == undefined || this.iconList.length == 0) {
      this.tbservice.getToolbarIcons().subscribe((data) => {
        let iconGroup: any = {};
        let icons = [];
        let count = 0;
        let dt, igic;
        Object.keys(data).forEach(function (key) {

          dt = data[key];
          Object.keys(dt).forEach(function (ig) {
            iconGroup[count] = { 'name': dt[ig]['name'] };
            igic = dt[ig]['icons'];
            Object.keys(igic).forEach(function (ic) {
              icons.push({ 'iconname': igic[ic]['name'], 'iconcode': igic[ic]['ligature'] });
            });
            iconGroup[count] = { 'name': dt[ig]['name'], 'icons': icons }
            count++;
          });

        });
        this.selicons = iconGroup;
        this.iconList = icons;
        this.allmaticons = icons;
      });
    }
  }

  iconSelected(v) {
    this.selectedicon = v; console.log(v);
  }

  showIconsList() {
    const selIconDiagRef = this.dialog.open(SelIconDiagComponent, { data: this.allmaticons, width: '800px' });
    selIconDiagRef.afterClosed().subscribe(result => {
      this.tbicon = result;
      this.selectedicon = result;
    });
  }


  addTBItem() {
    let iconcode = this.selectedicon;
    let iconlabel = this.tblabel = this.diagform.value['tblabel'];
    let iconcolor = this.tbcolor;
    if(iconcode.trim() !== ''){
      this.toolbar[this.tblen] = {
        'iconcode': iconcode,
        'iconlabel': iconlabel,
        'iconcolor': iconcolor
      };
      this.tblen += 1;
      this.data = this.toolbar;
      this.dialogRef.close(this.toolbar);
    } else{
      this.dialogRef.close();
    }
  }

  colorSelected(color) {
    this.tbcolor = color;
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
