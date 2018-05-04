import { Component, style } from '@angular/core';
import { HttpService} from '../services/http.service';
import {Article} from '../models/article';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import { SharedService } from '../services/shared.service';
import { Comment } from '../models/comment';

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
    newComment:Comment = new Comment();
    private id: string;
    private subscription: Subscription;

    constructor(private router: Router,private activateRoute: ActivatedRoute,private httpService: HttpService){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }
    ngOnInit(): void {        
        this.httpService.getArticle(this.id)
        .subscribe((data)=>{this.article=data["article"];
        this.comments=data["comments"];
    });
}

    sendComment(newComment:Comment,article_id:string){
        newComment.article_id = article_id;
        this.httpService.sendComment(newComment).subscribe(result=>{
            let success = result["success"];
            if(!success){
                this.router.navigateByUrl("/login")
            }else{
                let comment = result["comment"];
                console.log(comment)
                this.comments.push(comment);
                this.newComment.body = "";
            }
        })
    }
}