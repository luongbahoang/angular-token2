export class SignUpForm{
    private name:string;
    private username:string;
    private email:string;
    private password:string;
    private roles:string[];
    private avatar:string;
  
  public constructor(name:string,username:string, email:string,avatar:string,password:string){
        this.name=name;
        this.username=username;
        this.email=email;
        this.avatar=avatar;
        this.password=password;
        this.roles=['admin']
  }
  
}