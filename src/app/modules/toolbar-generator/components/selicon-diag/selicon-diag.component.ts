import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'selicon-diag',
    templateUrl: './selicon-diag.component.html',
    styleUrls: ['./selicon-diag.component.scss']
})

export class SelIconDiagComponent implements OnInit {

    public allmaticons: any;
    constructor(public dialog: MatDialog, private dialogRef: MatDialogRef<SelIconDiagComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.allmaticons = data;
    }

    ngOnInit() { }

    selectIcon(e) {
        this.dialogRef.close(e);
    }
}