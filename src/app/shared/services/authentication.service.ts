import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    public baseUrl:string="http://localhost:51902"
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        console.log(username + '' + password);
        return this.http.post<any>(this.baseUrl+'/api/login/',
        {username:username,password:password,companyname:''})
            .map(user => {
                if (user && user.token) {

                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {

        localStorage.removeItem('currentUser');
    }
}