System.register(['angular2/core', 'angular2/common', 'angular2/router', './custom-validators.component', './user.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, custom_validators_component_1, user_service_1, user_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (custom_validators_component_1_1) {
                custom_validators_component_1 = custom_validators_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(_userService, _router, _routeParams, fb) {
                    this._userService = _userService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.isSaving = false;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                custom_validators_component_1.CustomValidators.invalidEmail
                            ])],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                NewUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userId = this._routeParams.get("id");
                    this.pageTitle = this.userId ? 'Add User' : 'Edit User';
                    if (!this.userId)
                        return;
                    this.pageTitle = "Edit User";
                    this._userService.getUser(this.userId)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._router.navigate(['NotFound']);
                        }
                    }, null);
                };
                NewUserComponent.prototype.routerCanDeactivate = function () {
                    // if ( !this.isSaving ){
                    //     return confirm('Are you sure you want to navigate away from this page?\nYou will lose unsaved changes.');
                    // }
                    return true;
                };
                NewUserComponent.prototype.createUser = function () {
                    if (this.user.id) {
                        this._userService.putUser(this.user)
                            .subscribe(function (res) { return console.log('successful put'); }, function (err) { return console.log('error on put'); }, null);
                    }
                    else {
                        this._userService.postUser(this.user)
                            .subscribe(function (res) { return console.log('successful post'); }, function (err) { return console.log('error on post'); }, null);
                    }
                    this.isSaving = true;
                    this._router.navigate(['Users']);
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/new-user.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, router_1.RouteParams, common_1.FormBuilder])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=new-user.component.js.map