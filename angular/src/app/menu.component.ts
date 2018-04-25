import { Component, style } from '@angular/core';
import { SharedService } from './services/shared.service';


@Component({
    selector: 'menu-component',
    templateUrl: './templates/menu.html',
    // styleUrls: ['./app.component.css']
  })
  export class MenuComponent {

    isUserLoggedIn: boolean;

    constructor(private sharedService: SharedService) {
        this.sharedService.IsUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
    }

    logout(){
        this.sharedService.IsUserLoggedIn.next(false)
        localStorage.removeItem("currentUser")
        }
    
  }