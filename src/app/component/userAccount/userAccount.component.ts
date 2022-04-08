import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-userAccount',
  templateUrl: './userAccount.component.html',
  styleUrls: ['./userAccount.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private tokenService:TokenService,
               private router:Router ) { }

  ngOnInit() {
  }
  logout(){
    window.sessionStorage.clear();
    this.tokenService.checkLogIn$.next("")

    this.router.navigate(['logIn'])

  };
}
