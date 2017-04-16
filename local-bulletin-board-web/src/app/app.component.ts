import { Component, Input } from '@angular/core';
import {Auth} from './auth-service.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private auth:Auth){
    
  }


}
	