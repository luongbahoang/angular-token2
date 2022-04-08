import {Component, OnInit} from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';


import { SignInForm } from '../../../model/signInForm';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import {loggedIn} from "@angular/fire/auth-guard";

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
  formSubmit!:FormGroup;
  hide=true;
  status="đăng nhập tài khoản";
  status1="Đăng kí thành công , hãy đăng nhập tài khoản";
  checkStatus=false;
  singInForm!:SignInForm;
  constructor(private authService:AuthService,
              private tokenService:TokenService,
              private router:Router) { }

  ngOnInit() {

    if(this.authService.getData()){
      this.checkStatus=true;
    }
    this.formSubmit= new FormGroup({
      username:new FormControl('', Validators.required),
      password:new FormControl('',Validators.minLength(4)),
    })
  }

  onSubmit(){
    this.singInForm= new SignInForm(this.formSubmit.value.username,this.formSubmit.value.password);
   this.authService.signIn(this.singInForm).subscribe(data=>{

      if(data.token!=undefined){
        this.tokenService.setName(data.name);
        this.tokenService.setRoles(data.roles);
        this.tokenService.setToken(data.token);
        this.tokenService.setAvatar(data.avatar)

        this.tokenService.checkLogIn$.next(data.name)
        // chuyển đến user.component sau khi đăng nhập xong và reload trang
        this.router.navigate(['user'])
      }

    })
  }


}
