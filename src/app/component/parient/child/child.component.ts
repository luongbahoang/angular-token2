import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
child:string="child message"
@Output() dataFromChild= new EventEmitter<string>()
@Input() childMes:string="";
  constructor() { }
  ngOnInit(): void {
  }
  transfer(){
    this.dataFromChild.emit(this.child)
  }
}
