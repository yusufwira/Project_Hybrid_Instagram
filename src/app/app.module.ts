import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DetailpostingComponent } from './detailposting/detailposting.component';
import { SearchComponent } from './search/search.component';
import { HomefriendComponent } from './homefriend/homefriend.component';
import { PostingComponent } from './posting/posting.component';

const appRoutes: Routes = [
  {path:'home/:user',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'detailposting/:id',component:DetailpostingComponent},
  {path:'',component:LoginComponent}
  
  
  // {path:'/homefriend',component:HomefriendComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DetailpostingComponent,
    SearchComponent,
    HomefriendComponent,
    PostingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
