import {Component, OnInit} from 'angular2/core'
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {Router, CanDeactivate, RouteParams} from 'angular2/router'
import {CustomValidators} from '../shared/custom-validators.component'

import {UserService} from './user.service'
import {User} from './user';

@Component({
    templateUrl:'app/users/user-form.component.html',
    providers:[UserService]
})
export class UserFormComponent implements CanDeactivate, OnInit {

    isSaving = false;
    form:ControlGroup;
    user = new User();
    userId;
    pageTitle;


    constructor( 
        private _userService:UserService, 
        private _router:Router,
        private _routeParams:RouteParams,
        fb:FormBuilder ){

            this.form = fb.group({ 
                name:['', Validators.required],
                email:['', Validators.compose(
                    [
                        Validators.required,
                        CustomValidators.invalidEmail
                    ]
                )],
                phone:[],
                address: fb.group({
                    street:[],
                    suite:[],
                    city:[],
                    zipcode:[]
                })
            });
    }

    ngOnInit(){

        this.userId = this._routeParams.get("id");
        this.pageTitle = this.userId == null ? 'Add User' : 'Edit User';

        if ( !this.userId )
            return;

        this.pageTitle = "Edit User";
        this._userService.getUser(this.userId) 
            .subscribe( 
                user => this.user = user,
                response => {
                    if ( response.status == 404 ){
                        this._router.navigate(['NotFound'])
                    }
                },
                null 
            );
    }

    routerCanDeactivate(){
        // if ( !this.isSaving ){
        //     return confirm('Are you sure you want to navigate away from this page?\nYou will lose unsaved changes.');
        // }
        return true;
    }

    saveUser(){

        if ( this.user.id ){
            this._userService.updateUser(this.user)
                .subscribe( 
                    res => console.log('successful put'),
                    err => console.log('error on put'),
                    null
                );
        } else {
            this._userService.addUser(this.user) 
                .subscribe( 
                    res => console.log('successful post'),
                    err => console.log('error on post'),
                    null
                );
        }

        this.isSaving = true;
        this._router.navigate(['Users']);
    }

}