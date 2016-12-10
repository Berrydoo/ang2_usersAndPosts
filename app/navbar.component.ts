import {Component} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector:'navbar',
    templateUrl:'app/navbar.component.html', 
    directives:[ROUTER_DIRECTIVES], 
    styles: [`
        .router-link-active {
            background-color: black;
        }
    `]
})
export class NavBarComponent {

    constructor( private _router:Router){}

    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }

}