import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	users = [];
	username:string="";
	password:string="";
	tampilan:string = '';
	coba:string = "";
	tampil:boolean =false;
	


  	constructor(public us:UsersService) { }


  ngOnInit() {
  }

   checkInputUsername(event:any) {
	this.username = event.target.value;
	
   }

   checkInputPassword(event:any) {
	this.password = event.target.value;
	this.getUser();
	// this.us.getUsers().subscribe((data) => {

 //  			//this.users = data; 
 //  			var username = this.username;
 //  			var password = this.password; 
 //  			var hasil ="";
 //  			var haii ="";			  	

 //  			data.forEach(function(value){
 //  				console.log(value.username);
 //  				if(value.username == username && value.password == password){
 //  					hasil = "Sukses"; 
 //  				}
 //  				else{
 //  					hasil = "";
 //  					haii ="Gagal";
 //  				}
 //  			})
 //  			this.tampilan = hasil;
 //  			this.tampil = false;
 //  			this.coba = haii;


	// 	});
   }

   getUser(){
   	this.us.username = this.username;
   	this.us.pass = this.password;
   	this.us.user = this.username;
  		this.us.getUsers().subscribe((data) => {
  			// if(!data){
  			// 	alert("Maaf Username & Password salah");
  			// }
  			// else{
  			// 	this.tampilan = data[0].username;
  			// }
  			this.tampilan = data[0].username;
  		});
   }

  test() {
  		if(!this.tampilan){
  			alert("Maaf Username & Password salah");
  		}
		//this.tampil = true;
		// if(this.coba == "Gagal" && this.tampilan==""){
		// 	alert("Username dan Password Kurang Benar");
		// }
  		
		// this.getUser();

  		////////
  		

  	};

  

}
