System.register(['angular2/core', 'angular2/router', './user.service', '../shared/spinner.component'], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, spinner_component_1;
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
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
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
                UsersComponent.prototype.confirmDelete = function (user) {
                    var _this = this;
                    var deleteMe = confirm('Are you sure you want to delete this user?');
                    if (deleteMe) {
                        var index = this.users.indexOf(user);
                        this.users.splice(index, 1);
                        this._userService.deleteUser(user)
                            .subscribe(function (res) { return console.log("successful deletion"); }, function (res) {
                            console.log("User was not deleted, restoring to array");
                            _this.users.splice(index, 0, user);
                        }, null);
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/users/users.component.html',
                        providers: [user_service_1.UserService],
                        directives: [router_1.ROUTER_DIRECTIVES, spinner_component_1.SpinnerComponent]
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