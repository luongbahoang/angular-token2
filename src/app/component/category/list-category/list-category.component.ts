import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Category} from "../../../model/category";
import {CategoryService} from "../../../service/category.service";
import {EditCategoryComponent} from "../edit-category/edit-category.component";
import {MatDialog} from "@angular/material/dialog";
import {NotificationService} from "../../../service/notification.service";
import {DialogServiceService} from "../../../service/dialog-service.service";


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id','nameCategory', 'avatarCategory','button'];
  categories:Category[]=[];
  dataSource:any;
  status!:string;
  nameCategory!:string;
  avatarCategory!:string;
  category!:Category;
  id!:number;
  error:any={
    message:"name_existed"
  }
  success:any={
    message:"edit_success"
  }

@ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private categoryService:CategoryService,
              private dialog: MatDialog,
              private notification:NotificationService,
              private confirmService:DialogServiceService) { }

  ngOnInit(): void {
   this.loadData();
  }

loadData(){
    this.categoryService.listCategory().subscribe(data=>{
    this.categories=data
    this.dataSource = new MatTableDataSource<Category>(this.categories);
    this.dataSource.paginator = this.paginator;
  })
}

  delete(id:number){
    this.confirmService.openConfirmDialog("are you sure to delete this category")
      .afterClosed().subscribe(
        res=>{
          if(res){
            this.categoryService.deleteCategory(id).subscribe((data)=>{
              this.categories=data
              this.dataSource = new MatTableDataSource<Category>(this.categories);
              this.dataSource.paginator = this.paginator;
              this.notification.success("::Delete Successfully")
            })
          }
        }
    )

  }


  openDialog(id:number): void {
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '500px',
      data: {nameCategory: undefined},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined&&result.nameCategory!=undefined&&result.avatarCategory!=undefined)
      {
        this.category= new Category(result.nameCategory,result.avatarCategory);
        this.id=id;
        this.edit();
      }

    });
  }

  edit(){
    this.categoryService.editCategory(this.id,this.category).subscribe(data=>{
      if(JSON.stringify(data)==JSON.stringify(this.error)){
        this.status="name is existed! Please try again";
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status="successfully";
        this.loadData();
      }
    })
  }
}

