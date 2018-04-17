import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';
import { Profile } from '../models/profile';
import { AgmCoreModule } from '@agm/core';

@Component({
    selector: 'home',
    templateUrl: '../templates/home.html',
    styles:[`  .carousel-item {
                height: 65vh;
                min-height: 300px;
                background: no-repeat center center scroll;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
              }
              section {
                padding: 150px 0;
              }
              `],
    providers: [HttpService]
})
export class HomeComponent { 
    lat: number = 46.752121;
    lng: number = 30.912606;
    constructor(private httpService: HttpService){}
    admins:Profile[] = []

    ngOnInit(): void {
        this.httpService.getAdmins().subscribe(data => this.admins = data["admins"])
    }

}