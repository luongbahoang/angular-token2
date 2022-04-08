
import { Component, OnInit } from '@angular/core';
import {Category} from "../../../model/category";
import {TokenService} from "../../../service/token.service";
import {CategoryService} from "../../../service/category.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page2-category',
  templateUrl: './page2-category.component.html',
  styleUrls: ['./page2-category.component.css']
})
export class Page2CategoryComponent implements OnInit {
  totalElements: number = 0;
  categorys: Category[] = [];
  searchCategorys: Category[] = [];
  searchText!:string;
  nameCategory!:string;
  loading!: boolean;
  isCheckUser = false;
  checkSearch = false;
  sizeSearch: number = 0;
  constructor(private tokenService:TokenService,
              private categoryService:CategoryService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isCheckUser = true;
    }
    if(!this.checkSearch){
      this.getListRequest({page:0, size: 3})
    }
  }
  private getListRequest(request:any) {
    this.loading = true;
    this.categoryService.pageCategory(request).subscribe(data => {

      // @ts-ignore
      this.categorys = data['content'];
      // @ts-ignore

      // @ts-ignore
      this.totalElements = data['totalElements'];
      // @ts-ignore

      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  nextPage(event: PageEvent) {

    const request = {};
    // @ts-ignore
    request['page'] = event.pageIndex.toString();
    // @ts-ignore
    request['size'] = event.pageSize.toString();
    // @ts-ignore

    this.getListRequest(request);
    this.getSearchRequest(request,this.nameCategory);
  }

  private getSearchRequest(request:any, nameCategory:string) {
    this.loading = true;
    this.nameCategory = nameCategory;

    if(this.nameCategory == ''){
      return;
    }
    this.categoryService.searchByNameCategory(request,this.nameCategory).subscribe(data => {

      this.searchCategorys = data['content'];

      this.totalElements = data['totalElements'];
      this.sizeSearch = this.totalElements;

      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }
  public onSearch(){
    this.checkSearch = true;
    console.log('nameCategory == ', this.nameCategory);
    if(this.nameCategory ==''){
      this.checkSearch = false;
      return;
    }
    this.getSearchRequest({page:0, size: this.sizeSearch}, this.nameCategory);
  }
}
