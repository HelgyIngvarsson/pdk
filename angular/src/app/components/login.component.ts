import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
    selector: 'login',
    templateUrl: '../templates/login.html',
    providers: [HttpService]
})
export class LoginComponent { 
    constructor(private httpService: HttpService){}
}