import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable()
export class HttpService{
    // HOST = "http://localhost:8000/";
    HOST = "https://apipershotravndk.herokuapp.com/";
    constructor(private http: HttpClient){ }
      
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
}