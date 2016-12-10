import { Control, ControlGroup } from 'angular2/common';

export class CustomValidators {

    static invalidEmail(control:Control){
        var val:string = control.value,
            regex = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i),
            result = regex.test(val); 
        
        if ( !result ){
            return {invalidEmail:true};
        } else {
            return null;
        }
    }

}