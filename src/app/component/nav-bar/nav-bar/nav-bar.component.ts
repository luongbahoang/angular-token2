import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../service/token.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  name!:string
  avatar!: string;
  constructor(private tokenService:TokenService) { }

  ngOnInit() {

   if(this.tokenService.getName()){
    this.name=this.tokenService.getName();
     this.avatar = this.tokenService.getAvatar();

   }

    this.tokenService.checkLogIn$.subscribe(
      data=>{
      this.name = this.tokenService.getName();
        this.avatar = this.tokenService.getAvatar();}
    )


  }

}
