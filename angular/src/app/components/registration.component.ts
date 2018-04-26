import { Component, style } from '@angular/core';
import { AuthService} from '../services/authService';
import {RegUser} from '../models/reguser'
import { SharedService } from '../services/shared.service';
import {Router} from '@angular/router';

@Component({ 
    selector: 'registration',
    templateUrl: '../templates/signup.html',
    styles:[`container{
        padding-top:54px;
        padding-bottom:80px;
    }`],
    providers: [AuthService]
})
export class RegistrationComponent { 

    user:RegUser = new(RegUser)

    constructor(private router: Router,private authService: AuthService, private sharedService: SharedService){}

    registration(user:RegUser){
        this.authService.registration(user).subscribe(result=>{
            if(result){
            this.sharedService.IsUserLoggedIn.next(true) 
            this.router.navigateByUrl("/")
        }else{
            console.log("false")
        }})
    }

}