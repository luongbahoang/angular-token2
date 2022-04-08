import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.css']
})
export class PageCategoryComponent implements OnInit {
  categories:  Category[]=[];
  searchCategories:Category[]=[];
  totalElements:number=0;
  searchKey!:string;
  nameCategory!:string;
  size:number=3;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.pageCategory({page:0,size:3})
  }
  pageCategory(nextPage:any){
  this.categoryService.pageCategory(nextPage).subscribe(data=>{
    // @ts-ignore
    this.categories=data["content"];
    // @ts-ignore
    this.totalElements=data["totalElements"];
  })
  }
  searchPageCategory(nextPage:any,nameCategory:string){
    this.categoryService.searchCategory(nameCategory,nextPage).subscribe(data=>{
    if (data!=null){
      // @ts-ignore
      this.searchCategories=data["content"];
      // @ts-ignore
      this.totalElements=data["totalElements"];
    }
    if(data===null){
      this.searchCategories=[];
    }

    })
  }

  onSearchClear(){
    this.searchKey="";
  }
  applyFilter()
  {
    this.nameCategory=this.searchKey;
    if (this.searchKey)
    {
      this.searchPageCategory({page:0,size:this.size},this.nameCategory)
    }
  }

  nextPage(event:PageEvent) {
   const request={};
    // @ts-ignore
    request['page'] = event.pageIndex.toString();
    // @ts-ignore
    request['size'] =event.pageSize.toString();
    this.pageCategory(request);
     this.size=event.pageSize;
     this.searchPageCategory(request, this.nameCategory)

  }
}
