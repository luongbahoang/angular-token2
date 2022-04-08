import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { JwtRespond } from '../model/jwtRespond';
import { SignInForm } from '../model/signInForm';
import { SignUpForm } from '../model/SignUpForm';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNIN = environment.API_SERVER+"signIn";
  private API_SIGNUP = environment.API_SERVER+"signUp";
  private API_CHANGEAVATAR = environment.API_SERVER+"change-avatar";
  private data!:boolean;
  setData(data: boolean) {
  this.data=data;
  }
  getData():boolean{
    return this.data;
  }

  constructor(private http:HttpClient) {

   }

   signUp(signUp:SignUpForm):Observable<JwtRespond>{
    return this.http.post<JwtRespond>(this.API_SIGNUP,signUp)
   }

   signIn(signIn:SignInForm):Observable<JwtRespond>{
     return this.http.post<JwtRespond>(this.API_SIGNIN,signIn)
   }
   changeAvatar(avatar:any):Observable<JwtRespond>{
      return this.http.put<JwtRespond>(this.API_CHANGEAVATAR,avatar)
   }

}


