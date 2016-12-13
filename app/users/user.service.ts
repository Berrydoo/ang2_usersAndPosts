import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from './user'

@Injectable()
export class UserService {
    private _url = "http://jsonplaceholder.typicode.com/users";
    
    constructor(private _http: Http){}
    
    getUsers() {
         return this._http.get(this._url)
             .map(res => res.json());
    }
    
    getUser(id:string){
        return this._http.get(this.getServiceUrl(id) )
            .map(res => res.json());
    }

    addUser( user:User ){
        // returns Observable
        return this._http.post(this._url, JSON.stringify(user) )
                .map( res => res.json() );
    }

    updateUser( user ){
        return this._http.put( this.getServiceUrl(user.id), JSON.stringify(user) )
                    .map( user => user.json() );
    }

    deleteUser( user ){
        return this._http.delete( this.getServiceUrl( user.id ) )
                    .map( user => user.json() );
    }

    private getServiceUrl( id:string ){
        return this._url + "/" + id
    }

}