import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {SignInForm} from "../model/signInForm";
import {Observable} from "rxjs";
import {JwtRespond} from "../model/jwtRespond";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {

  }
  private API_SEARCH= environment.API_SERVER+"search"
  private API_CATEGORY = environment.API_SERVER+"category";
  private API_LISTCATEGORY = environment.API_SERVER+"category/list";
  createCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.API_CATEGORY,category)
  }
  deleteCategory(id:number):Observable<any>{
    return this.http.delete<any>(this.API_CATEGORY+"/"+id)
  }
  editCategory(id:number,category:Category):Observable<any>{
    return this.http.put<any>(this.API_CATEGORY+"/edit/"+id,category)
  }
  pageCategory(nextPage: any){
    let params=nextPage;
    return this.http.get(this.API_CATEGORY, {params})
  }
  searchByNameCategory(request:any,search:string):Observable<any>{
    const params=request;
    const nameCategory=search;
    //cách 1 sử dụng với @PathVariable
    return this.http.get<any>(this.API_SEARCH+"/"+nameCategory,{params})
    //cách 2 sử dụng với @requestParams
    // return this.http.get<any>(this.API_SEARCH+"?nameCategory="+nameCategory,{params})
  }

  listCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.API_LISTCATEGORY)
  }
  searchCategory(nameCategory:string,nextPage: any):Observable<Category[]>{
    let params=nextPage;

    return this.http.get<Category[]>(this.API_SEARCH+"/"+nameCategory,{params})
  }

}
