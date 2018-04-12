import { Component, style } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
    selector: 'menu-component',
    templateUrl: './templates/menu.html',
    // styleUrls: ['./app.component.css']
  })
  export class MenuComponent {

    logged: boolean = false
    user_id:string = this._cookieService.get("auth_session");

    constructor(private _cookieService:CookieService){}

    ngOnInit(): void {
        if(this.user_id.length >144){
            console.log(this.user_id);            
            this.logged = true
        }else{
            console.log(this.user_id);            
        }
     }
    
  }