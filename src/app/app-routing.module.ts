import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './component/logIn/signIn/logIn.component';

import { UserAccountComponent } from './component/userAccount/userAccount.component';
import { RegisterComponent } from './component/logIn/register/register.component';
import {HomeComponent} from "./component/home/home.component";
import {ChangeAvatarComponent} from "./component/profile/change-avatar/change-avatar.component";
import {AdminguardGuard} from "./security/adminguard.guard";
import {AuthguardGuard} from "./security/authguard.guard";
import {CreateCategoryComponent} from "./component/category/create-category/create-category.component";
import {PageCategoryComponent} from "./component/category/page-category/page-category.component";
import {ListCategoryComponent} from "./component/category/list-category/list-category.component";
import {Page2CategoryComponent} from "./component/category/page2-category/page2-category.component";
import {ParientComponent} from "./component/parient/parient.component";
import {HighChartComponent} from "./component/high-chart/high-chart.component";
import {GanttChartComponent} from "./component/high-chart/gantt-chart/gantt-chart.component";
import {LazyLoadingChartComponent} from "./component/high-chart/lazy-loading-chart/lazy-loading-chart.component";

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'logIn',component: LogInComponent,data: {title: 'Login'}},
  {path:'user',component: UserAccountComponent,},
  {path:'register',component: RegisterComponent},
  {path:'home',component: HomeComponent,data: {title: 'Home'}},
  {path:'createCategory',component:CreateCategoryComponent},
  {path:'PageCategory',component:PageCategoryComponent},
  {path:'Page2Category',component:Page2CategoryComponent},
  {path:'ListCategory',component:ListCategoryComponent},
  {path:'parient',component:ParientComponent},
  {path:'highchart',component:HighChartComponent,children:[
    {path:'gantt-chart',component:GanttChartComponent},
    {path:'lazy-loading-chart',component:LazyLoadingChartComponent},
    ]},
  {path:'changeAvatar',component: ChangeAvatarComponent,canActivate: [AuthguardGuard], data: {title: 'Change-Avatar'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
