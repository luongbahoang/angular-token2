import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Category} from "../../../model/category";


@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
avatarCategory!:string;
  constructor(public dialogRef: MatDialogRef<EditCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Category,
            ) { }

  ngOnInit(): void {

  }
  onUploadAvatar($event: string){
    this.data.avatarCategory=$event;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
