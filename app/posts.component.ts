import {Component, OnInit} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {PostService} from './post.service'

import {SpinnerComponent} from './spinner.component'

@Component({
    templateUrl:'app/posts.component.html',
    providers:[PostService],
    directives: [ROUTER_DIRECTIVES, SpinnerComponent], 
    styles:[`
        .posts li { cursor: default}
        .posts li:hover { background: #ecf0f1; }

        .list-group-item.active,
        .list-group-item.active:hover,
        .list-group-item.active:focus {
            background-color: #ecf0f1;
            border-color: #ecf0f1;
            color: #2c3e59;
        } 
    `]
})
export class PostsComponent implements OnInit {

    isLoading = true;
    posts = [];
    postHasBeenSelected = false;
    selectedPost;

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

    clickSelection(post){
        this.postHasBeenSelected = true;
        this.selectedPost = post;
    }

    mouseoverSelection(post){
        if ( this.postHasBeenSelected ){
            this.selectedPost = post;
        }
    }
}