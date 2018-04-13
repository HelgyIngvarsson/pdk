import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';
import {User} from '../models/user';

@Component({
    selector: 'login',
    templateUrl: '../templates/login.html',
    providers: [HttpService]
})
export class LoginComponent { 
    constructor(private httpService: HttpService){}

    user:User = new User();
    logged: boolean;
    login(user:User){
        this.httpService.auth(user)
        .subscribe((data:boolean)=>{this.logged=data},error => console.log(error));
        console.log(this.logged)
    }

}