import { Component, style } from '@angular/core';
import { HttpService} from './http.service';


@Component({
    selector: 'index',
    template: `<menu-component></menu-component> 
    <div class="container" style="padding-top: 60px">
    <router-outlet></router-outlet>
    </div>`,
    providers: [HttpService]
})
export class AppComponent { 
    constructor(private httpService: HttpService){}
}