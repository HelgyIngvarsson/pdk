import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile}    from   '../models/profile'
import { Feedback}  from '../models/feedback'
import { Image } from '../models/image';

@Injectable()
export class HttpService{
    // HOST = "http://localhost:8000/";
    HOST = "https://apipershotravndk.herokuapp.com/";
    public token: string;
    constructor(private http: HttpClient){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser)
        this.token = currentUser.token;
     }
      
    getArticles(){
        return this.http.get(this.HOST+'api/getArticles')
    }
    getAnonses(){
        return this.http.get(this.HOST+'api/getAnonses')
    }
    getAlbums(){
        return this.http.get(this.HOST+'api/getAlbums')
    }
    getAdmins(){
        return this.http.get(this.HOST+'api/getAdmins')
    }
    getArticle(id:string){
        return this.http.get(this.HOST+'api/getArticle/'+id);
    }
    getCurrentProfile(){
        return this.http.get(this.HOST+'api/current_profile',{headers:{"x-access-token":this.token}})
    }
    updateProfile(profile:Profile){
        return this.http.post(this.HOST+'api/update_profile',profile,{headers:{"x-access-token":this.token}})
    }
    sendFeedback(feedback:Feedback){
        return this.http.post(this.HOST+'api/send_feedback',feedback,{headers:{"x-access-token":this.token}})
    }
    updateImage(image:Image){
        return this.http.post(this.HOST+'api/update_image',image,{headers:{"x-access-token":this.token}})
    }
}