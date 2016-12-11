System.register(['angular2/core', 'angular2/router', './post.service', './spinner.component'], function(exports_1, context_1) {
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
    var core_1, router_1, post_service_1, spinner_component_1;
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
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _router) {
                    this._postService = _postService;
                    this._router = _router;
                    this.isLoading = true;
                    this.posts = [];
                    this.comments = [];
                    this.commentsLoaded = false;
                    this.postHasBeenSelected = false;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (posts) { return _this.posts = posts; }, function (err) { return console.log(err); }, function () { return _this.isLoading = false; });
                };
                PostsComponent.prototype.clickSelection = function (post) {
                    this.postHasBeenSelected = true;
                    this.commentsLoaded = false;
                    this.selectedPost = post;
                    this.getComments(post);
                };
                PostsComponent.prototype.mouseoverSelection = function (post) {
                    if (this.postHasBeenSelected) {
                        this.commentsLoaded = false;
                        this.selectedPost = post;
                        this.getComments(post);
                    }
                };
                PostsComponent.prototype.getComments = function (post) {
                    var _this = this;
                    this._postService.getPostComments(post.id)
                        .subscribe(function (comments) { return _this.comments = comments; }, function (err) { return console.log('error getting comments'); }, function () { return _this.commentsLoaded = true; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts.component.html',
                        providers: [post_service_1.PostService],
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent],
                        styles: ["\n        .posts li { cursor: default}\n        .posts li:hover { background: #ecf0f1; }\n\n        .list-group-item.active,\n        .list-group-item.active:hover,\n        .list-group-item.active:focus {\n            background-color: #ecf0f1;\n            border-color: #ecf0f1;\n            color: #2c3e59;\n        } \n    "]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, router_1.Router])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map