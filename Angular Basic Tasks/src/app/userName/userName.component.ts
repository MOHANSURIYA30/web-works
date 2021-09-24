import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'user-name',
  templateUrl: './userName.component.html',
  styleUrls: ['./userName.component.css']
})
export class UserNameComponent implements OnInit{
  constructor(private router:Router,private appService:AppService){}
   name:any;
  ngOnInit(): void {
    this.name = new FormControl('');
  }
  onSubmit(){
    this.router.navigate(['/userdetail',this.name.value]);
  }
 onSend(){
   this.appService.users = this.name.value;
   this.router.navigate(['/userdetail']);
   console.log(this.appService.users);
   
 }

}
