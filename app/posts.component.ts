import {Component, OnInit} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostService} from './post.service'

import {SpinnerComponent} from './spinner.component'

@Component({
    templateUrl:'app/posts.component.html',
    providers:[PostService],
    directives: [ROUTER_DIRECTIVES, SpinnerComponent]
})
export class PostsComponent implements OnInit {

    isLoading = true;
    posts = [];

    constructor( 
        private _postService:PostService,
        private _router:Router ){}

    ngOnInit(){
        this._postService.getPosts()
            .subscribe( 
                posts => this.posts = posts,
                err => console.log(err),
                () => this.isLoading = false
            )
    }
}