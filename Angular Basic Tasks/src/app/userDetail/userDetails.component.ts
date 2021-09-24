import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'user-detail',
  templateUrl: './userDetails.component.html',
  styleUrls: ['./userDetails.component.css']
})
export class UserDetailComponent implements OnInit{
  name:any;
  name1:any;
  constructor(private route: ActivatedRoute,private appService:AppService){}
  ngOnInit(): void {
     this.name = this.route.snapshot.paramMap.get('id');
     console.log(this.appService.users);
     
     this.name1 = this.appService.users;
  }


}
