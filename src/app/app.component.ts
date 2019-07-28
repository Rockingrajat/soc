import { Component, NgModule } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { ngModuleJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  imports:[HttpClientModule,HttpClient],
})
export class AppComponent {
  title = 'quora';
}
