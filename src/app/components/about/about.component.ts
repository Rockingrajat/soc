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
   uploadedImage =null;
  constructor(private http: HttpClient) {
    //this.title=title;
  }
  OnFileSelected(event){
    
    this.uploadedImage =event.target.files[0];
    
    
  }
  // _URL ='https://api.moodi.org/ctest/';
  post_data(title1,content1){
    // const fd=new FormData();
    // fd.append('image',event1,event1.name);
    // console.log(fd);
   var input={bloger_name:title1.value,pic_url:content1.value,types:"CH",College:"ABC",bloger_topic:"abc",bloger_blog:"xyz",bloger_status:"no",bloger_pic:this.uploadedImage};
  this.http.post('https://api.moodi.org/user/blog',input,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  })
  .subscribe(Response =>
    console.log(Response)
    )
}
  
}
