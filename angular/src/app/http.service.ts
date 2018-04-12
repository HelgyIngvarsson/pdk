import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getArticles(){
        return this.http.get('/api/getArticles')
    }
    getAnonses(){
        return this.http.get('/api/getAnonses')
    }
}