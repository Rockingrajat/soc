import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
@NgModule({
  imports:[HttpClientModule,HttpClient],
})
export class AboutComponent {
  // public title:any;
  constructor(private http: HttpClient) {
    //this.title=title;
  }
  _URL ='https://api.moodi.org/ctest/';
  post_data(title1,content1){
    console.log(title1.value,content1.value);
    var input={name:title1.value,number:content1.value};
  this.http.post('https://api.moodi.org/user/ctest',input,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  })
  .subscribe(Response =>
    console.log(Response)
    )
}
  

}
