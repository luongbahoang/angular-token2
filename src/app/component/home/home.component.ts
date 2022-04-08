import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onChangeAvatar($event: any){

    console.log("avatar===>",$event)
  }
  onchangeFile($event: any){
    console.log("file===>",$event)
  }
}
