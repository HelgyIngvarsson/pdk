import { Component, style } from '@angular/core';
import { AuthService} from '../services/authService';
import { SharedService } from '../services/shared.service';
import {Router} from '@angular/router';
import {RegUser} from '../models/reguser';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: '../templates/login.html',
    styles:[`container{
        padding-top:54px;
        padding-bottom:80px;
    }`],
    providers: [AuthService]
})
export class LoginComponent { 
    constructor(private router: Router,private authService: AuthService, private sharedService: SharedService){}
    user:RegUser = new RegUser();
    login(user:RegUser){
        this.authService.login(user).subscribe(result=>{
            if(result){
            this.sharedService.IsUserLoggedIn.next(true) 
            this.router.navigateByUrl("/")
        }else{
            console.log("false")
        }})
    }


}