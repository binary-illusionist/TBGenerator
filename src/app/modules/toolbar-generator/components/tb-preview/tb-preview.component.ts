import { Component, OnInit, Input, ViewChild, ElementRef, SimpleChanges, Sanitizer, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ExportcodeDiagComponent } from '@tbgen/modules/toolbar-generator/components/exportcode-diag/exportcode-diag.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
// import { SanitizeHtmlPipe } from '@tbgen/modules/toolbar-generator/services/sanitize-pipe';
@Component({
  selector: 'tb-preview',
  templateUrl: './tb-preview.component.html',
  styleUrls: ['./tb-preview.component.scss']
})
export class TbPreviewComponent implements OnInit {
  @Input()
  public toolbar: Array<Object>;
  public ptoolbar: Array<Object>;

  @ViewChild('tbpreview-container') tbc: ElementRef;

  public htmlCode: any;

  constructor(public sanitizer: DomSanitizer,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ExportcodeDiagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    
  }

  ngDoCheck(){
    if(this.toolbar != undefined ){
      if(this.ptoolbar == undefined){
        this.ptoolbar = this.toolbar;
      } else {
        if( this.ptoolbar.length !== this.toolbar.length){
          this.ptoolbar = this.toolbar;
        }
      }
      this.generatePreview('');
    }

  }
  

  generatePreview(gentype) {
    let code: any;
    if (this.ptoolbar !== undefined) {
      code = `
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
      <div class="tbgen-toolbar">`;
      Object.keys(this.ptoolbar).forEach((tbi) => {
        code += `
        <button class="tbtn"><i class="material-icons ticon" style="color: ` 
        + this.ptoolbar[tbi].iconcolor + `">`
        + this.ptoolbar[tbi].iconcode
        + `</i><span class="iconlabel">`
        + this.ptoolbar[tbi].iconlabel
        + `</span></button>`;
      });
      code += `</div>
        <style>
        .tbgen-toolbar{
          display: flex;
          width: 100%;
          min-width: 800px;
          font-size: 14px;
          align-content: space-around;
          height: 60px;
          background: whitesmoke;
          border: 1px solid #d5e2e5;
          justify-content: flex-start;
          align-items: center;
          margin: 0 5px;
        }
        .tbtn{
          height: 40px;
          min-width: 47px;
          border-radius: 4px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px;
          cursor: pointer;
        }
        .iconlabel{
          font-size: 12px;
          margin-left: 5px;
        }

        </style>
        `;
      this.htmlCode = this.sanitizer.bypassSecurityTrustHtml(code);
      if(gentype == 'e'){
        const exportCodeDiag = this.dialog.open(ExportcodeDiagComponent, {data: code, width: '800px'});
      }
    }
  }

}