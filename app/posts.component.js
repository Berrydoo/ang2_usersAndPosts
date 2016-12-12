System.register(['angular2/core', 'angular2/router', './post.service', './user.service', './spinner.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, post_service_1, user_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService, _router) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this._router = _router;
                    this.posts = [];
                    this.postHasBeenSelected = false;
                    this.commentsIsLoading = true;
                    this.comments = [];
                    this.users = [];
                    this.selectedUserId = 0;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    this.getPosts();
                    this.getUsers();
                };
                PostsComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; }, function (err) { return console.log(err); }, null);
                };
                PostsComponent.prototype.getPosts = function (filter) {
                    var _this = this;
                    this.postsIsLoading = true;
                    this.commentsIsLoading = true;
                    this.postHasBeenSelected = false;
                    if (filter && filter.userId) {
                        this.selectedUserId = filter.userId;
                    }
                    this._postService.getPosts(filter)
                        .subscribe(function (posts) { return _this.posts = posts; }, function (err) { return console.log(err); }, function () { return _this.postsIsLoading = false; });
                };
                PostsComponent.prototype.clickSelection = function (post) {
                    this.postHasBeenSelected = true;
                    this.commentsIsLoading = true;
                    this.selectedPost = post;
                    this.getComments(post);
                };
                PostsComponent.prototype.mouseoverSelection = function (post) {
                    if (this.postHasBeenSelected) {
                        this.commentsIsLoading = true;
                        this.selectedPost = post;
                        this.getComments(post);
                    }
                };
                PostsComponent.prototype.getComments = function (post) {
                    var _this = this;
                    this._postService.getPostComments(post.id)
                        .subscribe(function (comments) { return _this.comments = comments; }, function (err) { return console.log('error getting comments'); }, function () { return _this.commentsIsLoading = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts.component.html',
                        providers: [post_service_1.PostService, user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent],
                        styles: ["\n        .posts li { cursor: default}\n        .posts li:hover { background: #ecf0f1; }\n\n        .list-group-item.active,\n        .list-group-item.active:hover,\n        .list-group-item.active:focus {\n            background-color: #ecf0f1;\n            border-color: #ecf0f1;\n            color: #2c3e59;\n        } \n    "]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService, router_1.Router])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map