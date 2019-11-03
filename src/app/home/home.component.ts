import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public us:UsersService, public route:ActivatedRoute) { }

  username:string="";
  users:string = "";



  gambars=[];


  ngOnInit():void {
    this.users = this.us.user;
  	this.us.username =this.route.snapshot.params['user'];
  	this.username = this.us.username;
  	this.us.getImages().subscribe((data) => {
  		this.gambars = data;
  		console.log(data);
  	});
  }

}
