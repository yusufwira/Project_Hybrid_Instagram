import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
//import 'rxjs/add/observable/of';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  user ="";
  username:string="";
  pass:string="";
  id:number=0;
  key:string="";
  isi:string="";


  getUsers():Observable<any> {
  	//console.log(this.username);
  		return this.http.get("http://localhost/pmn_uas/users.php?username="+this.username+"&pass="+this.pass);
  }

  getImages():Observable<any> {
  	return this.http.get("http://localhost/pmn_uas/tampilGambar.php?user="+this.username);
  }

  getDetail():Observable<any> {
  	//console.log(this.id);
  	return this.http.get("http://localhost/pmn_uas/detailgambar.php?idpost="+this.id);
  }

  getLike():Observable<any> {
  	//console.log(this.id);
  	return this.http.get("http://localhost/pmn_uas/like.php?idpost="+this.id);
  }

  getFriends():Observable<any> {
  	return this.http.get("http://localhost/pmn_uas/search.php?key="+this.key);
  }

  getComments():Observable<any> {
  	//console.log(this.id);
  	return this.http.get("http://localhost/pmn_uas/getkomen.php?idpost="+this.id);
  }

  setLike():Observable<any> {
  	//console.log(this.id);
  	//console.log(this.user);
  	return this.http.get("http://localhost/pmn_uas/inssertLike.php?idpost="+this.id+"&user="+this.user);
  }

  setKomen():Observable<any> {
  	//console.log(this.id);
  	//console.log(this.user);
  	return this.http.get("http://localhost/pmn_uas/inssertKomen.php?idpost="+this.id+"&user="+this.user+"&isi="+this.isi);
  }
}
