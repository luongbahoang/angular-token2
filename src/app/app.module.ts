import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatCardModule} from '@angular/material/card'

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {UserAccountComponent} from './component/userAccount/userAccount.component';
import {NavBarComponent} from './component/nav-bar/nav-bar/nav-bar.component';
import {FooterComponent} from './component/footer/footer.component';

import {RegisterComponent} from './component/logIn/register/register.component';
import {AuthService} from './service/auth.service';
import {TokenService} from './service/token.service';

import {LogInComponent} from './component/logIn/signIn/logIn.component';

import {AngularFireModule} from '@angular/fire';

import {environment} from 'src/environments/environment.prod';
import {UploadAvatarComponent} from './component/upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HomeComponent} from './component/home/home.component';
import {AngularFireStorageModule} from "@angular/fire/storage";
import { UploadFileComponent } from './component/upload/upload-file/upload-file.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ChangeAvatarComponent } from './component/profile/change-avatar/change-avatar.component';
import {httpInterceptorProvider} from "./security/auth.interceptor";
import { CreateCategoryComponent } from './component/category/create-category/create-category.component';
import {PageCategoryComponent} from "./component/category/page-category/page-category.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ListCategoryComponent } from './component/category/list-category/list-category.component';
import {MatTableModule} from "@angular/material/table";
import { EditCategoryComponent } from './component/category/edit-category/edit-category.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import { Page2CategoryComponent } from './component/category/page2-category/page2-category.component';
import {NotificationService} from "./service/notification.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ParientComponent } from './component/parient/parient.component';
import { ChildComponent } from './component/parient/child/child.component';
import {HighchartsChartModule} from "highcharts-angular";
import { GanttChartComponent } from './component/high-chart/gantt-chart/gantt-chart.component';
import { LazyLoadingChartComponent } from './component/high-chart/lazy-loading-chart/lazy-loading-chart.component';
import { LineChartComponent } from './component/high-chart/line-chart/line-chart.component';
import { MapChartComponent } from './component/high-chart/map-chart/map-chart.component';
import { StockChartComponent } from './component/high-chart/stock-chart/stock-chart.component';
import { TestLineComponent } from './component/high-chart/test-line/test-line.component';
import {HighChartComponent} from "./component/high-chart/high-chart.component";
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import {MatMenuModule} from "@angular/material/menu";





@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    UserAccountComponent,
    NavBarComponent,
    FooterComponent,
    RegisterComponent,
    UploadAvatarComponent,
    HomeComponent,
    UploadFileComponent,
    ChangeAvatarComponent,
    CreateCategoryComponent,
    PageCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    Page2CategoryComponent,
    ParientComponent,
    ChildComponent,

    GanttChartComponent,
    LazyLoadingChartComponent,
    LineChartComponent,
    MapChartComponent,
    StockChartComponent,
    TestLineComponent,
    HighChartComponent,
    ConfirmDialogComponent,



  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        HttpClientModule,
        AppRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatTableModule,
        MatDialogModule,
        MatButtonModule,
        MatSnackBarModule,
        HighchartsChartModule,
        MatMenuModule,


    ],
  providers: [AuthService,NotificationService , TokenService,httpInterceptorProvider],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDialogComponent]
})
export class AppModule {
}
