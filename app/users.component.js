System.register(['angular2/core', 'angular2/router', './user.service'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_userService, _router) {
                    this._userService = _userService;
                    this._router = _router;
                    this.isLoading = true;
                    this.users = [];
                }
                UsersComponent.prototype.addUser = function () {
                    this._router.navigate(['NewUser']);
                };
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; }, function (err) { return console.log(err); }, function () { return _this.isLoading = false; });
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        template: "<h2>Users</h2>\n    <div *ngIf=\"isLoading\" >\n        <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n    </div>\n    <div *ngIf=\"!isLoading\">\n        <p>\n            <button class=\"btn btn-primary\" (click)=\"addUser()\">Add User</button>\n        </p>    \n        <table class=\"table table-bordered\">\n            <tr>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Edit</th>\n                <th>Delete</th>\n            </tr>\n            <tr *ngFor=\"#user of users\" >\n                <td>{{user.name}}</td>\n                <td>{{user.email}}</td>\n                <td>\n                    <a [routerLink]=\"['EditUser', {id:user.id}]\" >\n                        <i class=\"glyphicon glyphicon-edit\"></i>\n                    </a>\n                </td>\n                <td>\n                    <a [routerLink]=\"['DeleteUser', {id:user.id}]\" >\n                        <i class=\"glyphicon glyphicon-remove\"></i>\n                    </a>\n                </td>\n            </tr>\n        </table>\n    </div>\n    ",
                        providers: [user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map