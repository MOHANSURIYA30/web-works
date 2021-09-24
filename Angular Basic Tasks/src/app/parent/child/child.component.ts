import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() names:any;
     data:any =['express','node','DB'];
     @Output() transfer  = new EventEmitter<string>();
    constructor(){}
    ngOnInit(): void {
        console.log(this.names);
       
    }
    sendData(){
        this.transfer.emit(this.data);
    }

}
