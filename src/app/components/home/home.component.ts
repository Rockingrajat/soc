import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  RequestSent(){
    document.getElementById("friendRequest").style.backgroundColor="blue";
    document.getElementById("friendRequest").innerHTML = "Friend Request Sent";
  }

}
