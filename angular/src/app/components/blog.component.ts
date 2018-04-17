import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';
import {Article} from '../models/article';
import {Anonse} from '../models/anonse';


@Component({
    selector: 'blog',
    templateUrl: '../templates/blog.html',
    styles:[`container{
        padding-top:54px;
        padding-bottom:80px;
    }`],
    providers: [HttpService]
})
export class BlogComponent { 
    articles: Article[]=[];
    anonses: Anonse[]=[];

    constructor(private httpService: HttpService){}

    ngOnInit(): void {
       this.httpService.getArticles().subscribe(data => this.articles = data["articles"])
       this.httpService.getAnonses().subscribe(data => this.anonses = data["anonses"])
    }
}