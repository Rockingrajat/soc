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
  public title:any;
  constructor( http: HttpClient) {
    this.title="hey!";
  }
  
  post_data(title){
    console.log(this.title);
  // this.http.post('https://api.moodi.org/user/ctest',this.input,{
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   }),
  // })
  // .subscribe(Response =>
  //   console.log(Response)
  //   )
}
  

}
