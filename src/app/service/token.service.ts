import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
const TOKEN_KEY="Token_Key";
const NAME_KEY="Name_Key";
const ROLES_KEY="Roles_Key";
const AVATAR_KEY="Avatar_Key";
@Injectable({
  providedIn: 'root'
})
export class TokenService {
private roles:Array<string>=[];
checkLogIn$ = new Subject<any>();


constructor() { }
// <----------Token  ------------>
public setToken(token:string){
  window.sessionStorage.removeItem(TOKEN_KEY); //xóa cái cũ nếu có
  window.sessionStorage.setItem(TOKEN_KEY,token);
}
public getToken():string{
  // @ts-ignore
  return window.sessionStorage.getItem(TOKEN_KEY);
}

// <----------Name  ------------>
public setName(name:string){
  window.sessionStorage.removeItem(NAME_KEY);
  window.sessionStorage.setItem(NAME_KEY,JSON.stringify(name));
}
public getName():string{

  return JSON.parse(window.sessionStorage.getItem(NAME_KEY) || "{}");
}

// <----------Roles  ------------>
public setRoles(roles:string[]){
  window.sessionStorage.removeItem(ROLES_KEY);
  window.sessionStorage.setItem(ROLES_KEY,JSON.stringify(roles));
}
public getRoles():string[]{
  this.roles=[];
  if(sessionStorage.getItem(ROLES_KEY)){
    JSON.parse(sessionStorage.getItem(ROLES_KEY)|| '{}').forEach((role: { authority: string; }) => {
      this.roles.push(role.authority)
    });
  }
  return this.roles;
}
  public setAvatar(avatar:string){
    window.sessionStorage.removeItem(AVATAR_KEY);
    window.sessionStorage.setItem(AVATAR_KEY,avatar);
  }
  public getAvatar():string{

    // @ts-ignore
    return window.sessionStorage.getItem(AVATAR_KEY);
  }




}
