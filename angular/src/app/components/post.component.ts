import { Component, style } from '@angular/core';
import { HttpService} from '../http.service';
import {Article} from '../models/article';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';


@Component({
    selector: 'post',
    templateUrl: '../templates/post.html',
    styles:[`container{
        padding-top:54px;
        padding-bottom:80px;
    }`],
    providers: [HttpService]
})
export class PostComponent { 

    article: Article=new Article();
    comments:Comment[] =[]
    private id: string;
    private subscription: Subscription;
    constructor(private router: Router,private activateRoute: ActivatedRoute,private httpService: HttpService){
         
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }


    ngOnInit(): void {        
        this.httpService.getArticle(this.id)
        .subscribe((data)=>{this.article=data["article"];
        this.comments=data["comments"];
        //     if(!this.article){            
        //     this.router.navigateByUrl("/");
        // }
    });
}
}