import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';

@Component({ 
    selector: 'registration',
    templateUrl: '../templates/signup.html',
    styles:[`container{
        padding-top:54px;
        padding-bottom:80px;
    }`],
    providers: [HttpService]
})
export class RegistrationComponent { 
    constructor(private httpService: HttpService){}
}