import {User} from '../users/user'

export class UtilComponent {

    static sortUsers( users:User[] ){
        return users.sort( 
            function(a, b){
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();

                if ( nameA < nameB ){
                    return -1;
                }

                if ( nameA > nameB ){
                    return 1;
                }

                return 0;
            });
    }

}