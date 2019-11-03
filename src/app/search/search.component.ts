import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users = [];
  username:string="";
  keyword:string="";

  constructor(public us:UsersService) { }

  ngOnInit() {
  	this.username = this.us.user;
  }

  checkInputUsername(event:any) {
	this.keyword = event.target.value;
	this.getUsers();
   }

   getUsers(){
   	this.us.key = this.keyword;
	this.us.getFriends().subscribe((data)=>{
		console.log(data);
		this.users = data;
	});
   }

}
