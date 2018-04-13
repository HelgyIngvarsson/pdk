import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getArticles(){
        return this.http.get('https://pershotravndk.herokuapp.com/api/getArticles')
        // return this.http.get('http://localhost:8000/api/getArticles')
    }
    getAnonses(){
        return this.http.get('https://pershotravndk.herokuapp.com/api/getAnonses')
        // return this.http.get('http://localhost:8000/api/getAnonses')
    }
    auth(user:User){
        const body ={username: user.username,password:user.password}
        return this.http.post('https://pershotravndk.herokuapp.com/api/login', body); 
        // return this.http.post('http://localhost:8000/api/login', body)
    }
}