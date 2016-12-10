import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './home.component'
import {PostsComponent} from './posts.component'
import {UsersComponent} from './users.component'
import {NavBarComponent} from './navbar.component'
import {NewUserComponent} from './new-user.component'
import {NotFoundComponent} from './not-found.component'

@RouteConfig([
    {path:'/', name:'Home', component:HomeComponent, useAsDefault:true},
    {path:'/users', name:'Users', component:UsersComponent},
    {path:'/newUser', name:'NewUser', component:NewUserComponent},
    {path:'/user/:id', name:'EditUser', component:NewUserComponent},
    {path:'/user/delete/:id', name:'DeleteUser', component:NewUserComponent},
    {path:'/posts', name:'Posts', component:PostsComponent},
    {path:'/notFound', name:'NotFound', component:NotFoundComponent},
    {path:'/*other', name:'Other', redirectTo:['Home']}
])
@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
    directives:[ROUTER_DIRECTIVES, NavBarComponent ]
})
export class AppComponent { }