import {Component, OnInit} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {UserService} from './user.service'


@Component({
    templateUrl: 'app/users.component.html',
    providers:[UserService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit {
    
    isLoading = true;
    users = [];

    constructor( 
        private _userService:UserService,
        private _router:Router ){}

    addUser(){
        this._router.navigate(['NewUser']);
    }

    ngOnInit(){
        this._userService.getUsers()
                .subscribe( 
                    users => this.users = users,
                    err => console.log(err),
                    () => this.isLoading = false
                );
    }

    confirmDelete( user ){
        var deleteMe = confirm('Are you sure you want to delete this user?');
        if ( deleteMe ){

            var index = this.users.indexOf(user);
            this.users.splice( index, 1 );

            this._userService.deleteUser(user)
                .subscribe(
                    res => console.log(`successful deletion`),
                    res => {
                        console.log( `User was not deleted, restoring to array`);
                        this.users.splice(index,0,user)
                    },
                    null
                );

        }
    }

}