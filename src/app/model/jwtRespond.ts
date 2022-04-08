export class JwtRespond {
    public token:string;
    public type:string;
    public name:string;
    public roles:any[];
    public avatar:string;
    constructor(token:string,type:string,name:string,roles:any,avatar:string){
        this.token=token;
        this.type=type;
        this.name=name;
        this.roles=roles;
      this.avatar=avatar;
    }
}
