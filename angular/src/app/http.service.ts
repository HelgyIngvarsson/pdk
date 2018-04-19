import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegUser} from './models/reguser';

@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getArticles(){
        return this.http.get('https://apipershotravndk.herokuapp.com/api/getArticles')
        // return this.http.get('http://localhost:8000/api/getArticles')
    }
    getAnonses(){
        return this.http.get('https://apipershotravndk.herokuapp.com/api/getAnonses')
        // return this.http.get('http://localhost:8000/api/getAnonses')
    }
    getAlbums(){
        return this.http.get('https://apipershotravndk.herokuapp.com/api/getAlbums')
        // return this.http.get('http://localhost:8000/api/getAlbums')
    }
    getAdmins(){
        return this.http.get('https://apipershotravndk.herokuapp.com/api/getAdmins')
        // return this.http.get('http://localhost:8000/api/getAdmins')
    }
    auth(user:RegUser){
        const body ={username: user.username,password:user.password}
        return this.http.post('https://apipershotravndk.herokuapp.com/api/login', body); 
        // return this.http.post('http://localhost:8000/api/login', body)
    }
    getArticle(id:string){
        const body = {id:id}
        return this.http.post('https://apipershotravndk.herokuapp.com/api/getArticle', body); 
        // return this.http.post('http://localhost:8000/api/getArticle',body)
    }
}