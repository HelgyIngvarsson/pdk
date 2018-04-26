import { Component, style } from '@angular/core';
import { HttpService} from '../services/http.service';
import { Profile}   from '../models/profile'
import {Router} from '@angular/router';

@Component({
    selector: 'cabinet-component',
    templateUrl: '../templates/cabinet.html',
    // styleUrls:['../templates/compact-gallery.css'],
    providers: [HttpService]
})
export class CabinetComponent { 
    constructor(private router: Router, private httpService: HttpService){}
    profile:Profile = new(Profile)
    
    ngOnInit(): void {
        this.httpService.getCurrentProfile().subscribe(data=>{
            this.profile = data["profile"];
            if(!this.profile){
                this.router.navigateByUrl('/login')
            } 
        })
    } 
}