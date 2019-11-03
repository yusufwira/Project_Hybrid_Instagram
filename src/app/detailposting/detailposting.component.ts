import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detailposting',
  templateUrl: './detailposting.component.html',
  styleUrls: ['./detailposting.component.css']
})
export class DetailpostingComponent implements OnInit {
	id:number=0;

	tampil:string="";
	show:string="";
	caption:string="";
	tanggal:string="";
	like:string="";
	komens = [];
	showing:boolean = true;
	isiuserkomen:string="";
	isihasilkomen:string="";
	isikomen:string="";


  constructor(public us:UsersService, public route:ActivatedRoute) { }
  username="";
  gambarse=[];
  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
  	this.us.id = this.id;
  	this.us.getDetail().subscribe((data) => {
  		this.username = data[0].username;
  		this.gambarse = data.gambars;
  		console.log(this.gambarse);
  		this.show = data.gambars[0]['idgambar'] +"." + data.gambars[0]['extention']
  		console.log(this.show);
  		this.tampil = "http://localhost/pmn_uas/images/"+this.show;
  		this.caption = data[0].komen;
  		this.tanggal = data[0].tanggal;
  		if (this.gambarse.length == 1) {
  			this.showing = false;
  		}	
  	});
  	
  	
  	this.tampillike();

  	this.us.getComments().subscribe((data) => {
  		this.komens = data;
  	});
  }

  i:number=0;

  tampillike(){
  	this.us.getLike().subscribe((data) => {
  		this.like = data;
  	});
  }

  tampilan(){    
  	console.log(this.gambarse);
  		this.show = this.gambarse[this.i]['idgambar'] +"." + this.gambarse[this.i]['extention'];
  		console.log(this.gambarse[this.i]['idgambar'] +"." + this.gambarse[this.i]['extention']);
  		this.tampil = "http://localhost/pmn_uas/images/"+this.show;
  		//this.tampil = '<img src="http://localhost/pmn_uas/images/{{data[gambars]['+i+'].idgambar}}.{{data[gambars]['+i+'].extention}}" id="displaypic"  name="displaypic" style="width: 300px; height: 300px; border: 1px solid black;" />';
  }

  next(){
  	this.i= this.i+1;
  	this.tampilan();
  	
  	console.log(this.i);
  }

  prev(){
  	this.i= this.i-1;
  	this.tampilan();
  
  	console.log(this.i);
  	
  }

 // set:string="";
  setLike(){
  	this.us.setLike().subscribe((data) => {
  //		this.set = data;
  		var hasil = parseInt(this.like)+parseInt(data);
  		console.log(data);
  		this.like = hasil.toString();
  	});
  }

  checkInputKomen(event:any) {
	this.isikomen = event.target.value;
   }

   setKomen(){
   	this.us.isi = this.isikomen;
   	this.us.setKomen().subscribe((data) => {
   		this.isiuserkomen = data.user;
   		this.isihasilkomen = data.isi;
   		console.log(this.isihasilkomen);
       this.us.getComments().subscribe((data) => {
       this.komens = data;
       console.log(this.komens);
    });
   	});

     
   }

  


}
