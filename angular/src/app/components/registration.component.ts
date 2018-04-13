import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
    selector: 'registration',
    templateUrl: '../templates/signup.html',
    providers: [HttpService]
})
export class RegistrationComponent { 
    constructor(private httpService: HttpService){}
}