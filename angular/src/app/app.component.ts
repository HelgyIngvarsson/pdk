import { Component, style } from '@angular/core';
import { HttpService} from './http.service';
import {Article} from './models/article';
import {Anonse} from './models/anonse';

@Component({
    selector: 'home',
    templateUrl: './templates/articleList.html',
    providers: [HttpService]
})
export class AppComponent { 
    articles: Article[]=[];
    anonses: Anonse[]=[];

    constructor(private httpService: HttpService){}

    ngOnInit(): void {
       this.httpService.getArticles().subscribe(data => this.articles = data["articles"])
       this.httpService.getAnonses().subscribe(data => this.anonses = data["anonses"])
    }

}