import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-comp',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    names:any =['Html','Css','Js'];
    datas:any
    ngOnInit(): void {

    }

    
 onLogin(data: any) {
 this.datas =data;
 console.log(data);
 console.log(this.datas);
 
 
 }
}
