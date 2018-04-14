import { Component, style } from '@angular/core';
import { SharedService } from './shared.service';
import { CookieService } from 'angular2-cookie/core';


@Component({
    selector: 'menu-component',
    templateUrl: './templates/menu.html',
    // styleUrls: ['./app.component.css']
  })
  export class MenuComponent {

    isUserLoggedIn: boolean;

    constructor(private sharedService: SharedService,private _cookieService:CookieService) {
        this.sharedService.IsUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
    }

    logout(){
        this.sharedService.IsUserLoggedIn.next(false)
        this._cookieService.remove("userID")
        }
    
  }