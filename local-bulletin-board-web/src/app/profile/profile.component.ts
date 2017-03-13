import { Component, OnInit } from '@angular/core';
import {Auth} from '../auth-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:Auth){}

  ngOnInit() {
  	if(this.auth.authenticated()){
  		console.log("Loading profile page...");
  	}
  }

}
