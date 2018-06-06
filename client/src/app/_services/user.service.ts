import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
     this.http.get<User[]>('/users').subscribe(res=>console.log(res));
        return this.http.get<User[]>('/api/users');
        
    }

    getById(id: number) {
        this.http.get('/user' + id).subscribe(res=>console.log(res));
        return this.http.get('/api/users/' + id);              
    }

    create(user: User) {
        this.http.post('/users', user).subscribe(res=>console.log(res))
        return this.http.post('/api/users', user);
        
    }

    update(user: User) {
        this.http.put('/user' + user.id, user).subscribe(res=>console.log(res));
        return this.http.put('/api/users/' + user.id, user);
    
    }

    delete(id: number) {
         this.http.delete('/user' + id).subscribe(res=>console.log);
        return this.http.delete('/api/users/' + id);
        
    }
}