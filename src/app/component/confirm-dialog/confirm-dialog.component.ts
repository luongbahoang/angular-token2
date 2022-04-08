import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  // @ts-ignore
  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private dialogRef:MatDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
  }
closeDialog(){
    this.dialogRef.close(false)
}
}
