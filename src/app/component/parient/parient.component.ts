import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parient',
  templateUrl: './parient.component.html',
  styleUrls: ['./parient.component.css']
})


export class ParientComponent implements OnInit{

  parient: string = "parient message"
  message = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  getdataFromChild($event: string) {
    this.message = $event;
  }

}
