import {Component, OnInit} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'

import {PostService} from './post.service'
import {UserService} from './user.service';

import {SpinnerComponent} from './spinner.component'
import {PaginationComponent} from './pagination.component'

@Component({
    templateUrl:'app/posts.component.html',
    providers:[PostService, UserService],
    directives: [ROUTER_DIRECTIVES, SpinnerComponent, PaginationComponent], 
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

    postsIsLoading;
    posts = [];
    pagedPosts = [];
    postHasBeenSelected = false;
    selectedPost;

    commentsIsLoading = true;
    comments = [];
    
    users = [];
    selectedUserId = 0;

    pageSize = 10;

    constructor( 
        private _postService:PostService,
        private _userService:UserService,
        private _router:Router ){}

    ngOnInit(){
        this.getPosts();
        this.getUsers();
    }

    private getUsers(){
        this._userService.getUsers()
            .subscribe(
                users => this.users = users, 
                err => console.log(err),
                null
            )

    }

    private getPosts(filter?){
        this.postsIsLoading = true;
        this.commentsIsLoading = true;
        this.postHasBeenSelected = false;

        if ( filter && filter.userId ){
            this.selectedUserId = filter.userId;
        }

        this._postService.getPosts(filter)
            .subscribe( 
                posts =>{
                    this.posts = posts;
                    this.pagedPosts = _.take(this.posts, this.pageSize);
                }, 
                err => console.log(err),
                () => this.postsIsLoading = false
            );

    }

    clickSelection(post){
        this.postHasBeenSelected = true;
        this.commentsIsLoading = true;
        this.selectedPost = post;
        this.getComments(post);
    }

    mouseoverSelection(post){
        if ( this.postHasBeenSelected ){
            this.commentsIsLoading = true;
            this.selectedPost = post;
            this.getComments(post);
        }
    }

    getComments(post){
        this._postService.getPostComments(post.id)
            .subscribe( 
                comments => this.comments = comments,
                err => console.log('error getting comments'),
                () => this.commentsIsLoading = false
            )
    }

    showPostsForTab( tabNum ){

        var start = this.calculateStartIndex( tabNum );
        var end = this.calculateEndIndex( tabNum );
        this.pagedPosts = _.take( _.rest(this.posts, start), this.pageSize);

    }

    private calculateStartIndex( tabNum ){
        return this.pageSize * (tabNum - 1);
    }

    private calculateEndIndex( tabNum ){
        return this.pageSize * (tabNum-1) + this.pageSize - 1; 
    }
}