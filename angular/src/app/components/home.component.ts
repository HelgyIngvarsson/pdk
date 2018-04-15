import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';
import {Article} from '../models/article';
import {Anonse} from '../models/anonse';

@Component({
    selector: 'home',
    templateUrl: '../templates/home.html',
    styles:[`.short-article-body{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis    }`],
    providers: [HttpService]
})
export class HomeComponent { 
    articles: Article[]=[];
    anonses: Anonse[]=[];

    constructor(private httpService: HttpService){}

    ngOnInit(): void {
       this.httpService.getArticles().subscribe(data => this.articles = data["articles"])
       this.httpService.getAnonses().subscribe(data => this.anonses = data["anonses"])
    }

}