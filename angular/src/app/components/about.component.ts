import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';
import { Profile } from '../models/profile';


@Component({
    selector: 'about',
    templateUrl: '../templates/about.html',
    providers: [HttpService]
})
export class AboutComponent { 
    constructor(private httpService: HttpService){}
    admins:Profile[] = []

    ngOnInit(): void {
        this.httpService.getAdmins().subscribe(data => this.admins = data["admins"])
    }
}