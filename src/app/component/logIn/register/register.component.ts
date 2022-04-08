import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpForm } from '../../../model/SignUpForm';
import { AuthService } from '../../../service/auth.service';
import {Router, RouterModule} from "@angular/router";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formSubmit!:FormGroup;
  status!:string;
  hide=true;
  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private tokenService:TokenService,
              private router:Router) { }
  signUpForm!:SignUpForm;
  error1:any={
    message:"nouser"
  }
  error2:any={
    message:"noemail"
  }
  success:any={
    message:"yes"
  }
  ngOnInit() {
   this.createForm();
  }
  onSubmit(){
    this.signUpForm= new SignUpForm(
      this.formSubmit.value.name,
      this.formSubmit.value.username,
      this.formSubmit.value.email,
      this.formSubmit.value.avatar,
      this.formSubmit.value.password
      )
    this.authService.signUp( this.signUpForm).subscribe(data=>{
      if(JSON.stringify(data)==JSON.stringify(this.error1)){
        this.status="username existed! Please try again"
      }
      if(JSON.stringify(data)==JSON.stringify(this.error2)){
        this.status="email existed! Please try again"
      }
      if(JSON.stringify(data)==JSON.stringify(this.success)){
        this.status="create account successfully",
        this.authService.setData(true);
        this.router.navigate(["logIn"])

      }
    }
    )

  }
  createForm(){
    this.formSubmit= this.fb.group({
      name: ['', Validators.required],
      username:['', Validators.required],
      email:['', Validators.required],
      // avatar:['', Validators.required],
      password:['', Validators.required]

    })
  }
}
