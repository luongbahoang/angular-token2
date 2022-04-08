import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  formSubmit!:FormGroup;
 form:any={};
 status="New Category";
  category!:Category;
  error1:any={
    message:"no_name_category"
  }
  error2:any={
    message:"no_avatar_category"
  }
  success:any={
    message:"create_success"
  }
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
   this.createFrom()
  }
  onSubmit(){
  this.category=new Category(this.formSubmit.value.nameCategory,this.form.avatarCategory)

    this.categoryService.createCategory(this.category).subscribe((data)=>{
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status="category name existed! Please try again"
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status="category avatar is required"
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status="create account successfully"
        this.createFrom()
      }
}
    )
  }
  onUploadAvatar($event: any){
this.form.avatarCategory=$event;
  }
  createFrom(){
    this.formSubmit= new FormGroup({
      nameCategory:new FormControl('', Validators.required),
      avatarCategory:new FormControl(''),
    })
  }



}
