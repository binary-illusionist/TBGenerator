import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'exportcode-diag',
  templateUrl: './exportcode-diag.component.html',
  styleUrls: ['./exportcode-diag.component.scss']
})
export class ExportcodeDiagComponent implements OnInit {
  public htmlCode: any;

  constructor(public sanitizer: DomSanitizer, public dialog: MatDialog,
    private dialogRef: MatDialogRef<ExportcodeDiagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }

  ngOnInit() {
    console.log(this.data);
    this.htmlCode = this.data;
    //this.htmlCode = this.sanitizer.bypassSecurityTrustHtml(this.data);
  }

  copyToClipboard(){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.htmlCode;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
  }
}