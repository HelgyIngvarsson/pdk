import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegUser} from '../models/reguser';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService{
    HOST = "http://localhost:8000/";
    // HOST = "https://apipershotravndk.herokuapp.com/";
    public token: string;

    constructor(private http: HttpClient){
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser)
        this.token = currentUser.token;
    }

    login(user:RegUser): Observable<boolean>{
        const body ={username: user.username,password:user.password}
        let success: boolean
        return   this.http.post(this.HOST+'api/login', body).map(data=>{success = data["success"];
        if(success){
            this.token = data["token"];
            localStorage.setItem('currentUser',JSON.stringify({token:this.token}));
            return true;
        }else{
            return false;
        }
      });

    }
    registration(user:RegUser): Observable<boolean>{
        const body ={username: user.username,password:user.password, email:user.email}
        let success: boolean
        return   this.http.post(this.HOST+'api/registration', body).map(data=>{success = data["success"];
        if(success){
            this.token = data["token"];
            localStorage.setItem('currentUser',JSON.stringify({token:this.token}));
            return true;
        }else{
            return false;
        }
      });

    }

}