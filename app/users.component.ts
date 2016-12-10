import {Component, OnInit} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {UserService} from './user.service'


@Component({
    template:`<h2>Users</h2>
    <div *ngIf="isLoading" >
        <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngIf="!isLoading">
        <p>
            <button class="btn btn-primary" (click)="addUser()">Add User</button>
        </p>    
        <table class="table table-bordered">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            <tr *ngFor="#user of users" >
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>
                    <a [routerLink]="['EditUser', {id:user.id}]" >
                        <i class="glyphicon glyphicon-edit"></i>
                    </a>
                </td>
                <td>
                    <a [routerLink]="['DeleteUser', {id:user.id}]" >
                        <i class="glyphicon glyphicon-remove"></i>
                    </a>
                </td>
            </tr>
        </table>
    </div>
    `,
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


}