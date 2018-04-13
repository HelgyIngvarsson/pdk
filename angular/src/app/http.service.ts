import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getArticles(){
        return this.http.get('https://pershotravndk.herokuapp.com/api/getArticles')
    }
    getAnonses(){
        return this.http.get('https://pershotravndk.herokuapp.com/api/getAnonses')
    }
    auth(user:User){
        const body ={username: user.username,password:user.password}
        return this.http.post('/api/login', body); 
    }
}