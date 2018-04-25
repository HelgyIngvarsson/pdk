import { Component, style } from '@angular/core';
import { SharedService } from './services/shared.service';


@Component({
    selector: 'index',
    template: `<menu-component></menu-component> 
    <div class="container-fluid" style="padding-right:0px;padding-left:0px;">
    <router-outlet></router-outlet>
    </div>
    <footer-component></footer-component>`
})
export class AppComponent { 
    constructor(private sharedService: SharedService){}
    ngOnInit(): void {
        if(localStorage.getItem("currentUser")){
            this.sharedService.IsUserLoggedIn.next(true)
        }
    }
}