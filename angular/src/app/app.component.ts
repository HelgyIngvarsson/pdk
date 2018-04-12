import { Component, style } from '@angular/core';
import { HttpService} from './http.service';
import {Article} from './article';

@Component({
    selector: 'menu-component',
    templateUrl: './templates/articleList.html',
    providers: [HttpService]
})
export class AppComponent { 

    articles: Article[]=[];

    constructor(private httpService: HttpService){}

    ngOnInit(): void {
       this.httpService.getData().subscribe(data => this.articles = data["articles"])
    }

}