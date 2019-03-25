import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';

 
@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    public baseUrl:string="http://localhost:51902"
    getAll() {
        return this.http.get<User[]>('/api/user');
    }

    getById(id: number) {
        return this.http.get('/api/user/' + id);
    }

    create(user: User) {
             
        console.log(user);
        return this.http.post(this.baseUrl+'/api/user', user);
    }

    update(user: User) {
        return this.http.put('/api/user/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/userA/' + id);
    }
}