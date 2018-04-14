import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';
import { CookieService } from 'angular2-cookie/core';
import { SharedService } from '../shared.service';
import {Router} from '@angular/router';


import {User} from '../models/user';
export class Storage{
    public userID:string;
}
@Component({
    selector: 'login',
    templateUrl: '../templates/login.html',
    providers: [HttpService]
})
export class LoginComponent { 
    constructor(private router: Router,private httpService: HttpService,private _cookieService:CookieService,private sharedService: SharedService){}

    user:User = new User();
    response: Storage = new Storage();
    login(user:User){
        this.httpService.auth(user)
        .subscribe((data:Storage)=>{this.response=data;
            if(this.response.userID!=""){
            this.sharedService.IsUserLoggedIn.next(true),
            this._cookieService.put("userID", this.response.userID);
            this.router.navigateByUrl("/");
        }else{
            this._cookieService.put("userID", "");
        }
            console.log(this.response.userID)},error => console.log(error));
            
    }


}