import { Component } from '@angular/core';
import {Auth} from './auth-service.service';

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
	