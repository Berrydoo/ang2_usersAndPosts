import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//import {User} from './user'

@Injectable()
export class PostService {
    private _url = "http://jsonplaceholder.typicode.com/posts";
    
    constructor(private _http: Http){}
    
    getPosts() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
    
    getPost(id:string){
        return this._http.get(this.getServiceUrl(id) )
            .map(res => res.json());
    }

    addPost( post ){
        return this._http.post(this._url, JSON.stringify(post) )
                .map( res => res.json() );
    }

    updatePost( post ){
        return this._http.put( this.getServiceUrl(post.id), JSON.stringify(post) )
                    .map( user => user.json() );
    }

    deletePost( post ){
        return this._http.delete( this.getServiceUrl( post.id ) )
                    .map( user => user.json() );
    }

    private getServiceUrl( id:string ){
        return this._url + "/" + id
    }

}