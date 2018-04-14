import { Component, style } from '@angular/core';
import { HttpService} from './http.service';
import { SharedService } from './shared.service';
import { CookieService } from 'angular2-cookie/core';


@Component({
    selector: 'index',
    template: `<menu-component></menu-component> 
    <div class="container" style="padding-top: 60px">
    <router-outlet></router-outlet>
    </div>`,
    providers: [HttpService]
})
export class AppComponent { 
    constructor(private httpService: HttpService,private _cookieService:CookieService,private sharedService: SharedService){}
    ngOnInit(): void {
        if(this._cookieService.get("userID")){
            this.sharedService.IsUserLoggedIn.next(true)
        }
    }
}