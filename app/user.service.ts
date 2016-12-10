import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _url = "http://jsonplaceholder.typicode.com/users";
    
    constructor(private _http: Http){}
    
    getUsers() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
    
    getUser(id){
        return this._http.get(this._url + "/" + id )
            .map(res => res.json());
    }

    postUser( user ){
        // returns Observable
        return this._http.post(this._url, JSON.stringify(user) )
                .map( res => res.json() );
    }

    putUser( user ){
        return this._http.put( this._url + "/" + user.id, JSON.stringify(user) )
                    .map( user => user.json() );
    }

}