import { Component, OnInit } from '@angular/core';
import {Auth} from '../auth-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  constructor(private auth:Auth){}

  ngOnInit() {
  }

}
