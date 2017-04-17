import { Component, OnInit } from '@angular/core';
import {Auth} from '../auth-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  post_clicked = false;
  queue_clicked = false;

  constructor(private auth:Auth){}

  ngOnInit() {
  	if(this.auth.authenticated()){
  		console.log("Loading profile page...");
  	}
  }

  public view_post() {
    this.post_clicked = true;
    this.queue_clicked = false;
  }

  public get_view_post() {
    return this.post_clicked;
  }

  public view_queue() {
    this.queue_clicked = true;
    this.post_clicked = false;
  }

  public get_view_queue() {
    return this.queue_clicked;
  }

}
