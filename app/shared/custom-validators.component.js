System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CustomValidators;
    return {
        setters:[],
        execute: function() {
            CustomValidators = (function () {
                function CustomValidators() {
                }
                CustomValidators.invalidEmail = function (control) {
                    var val = control.value, regex = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i), result = regex.test(val);
                    if (!result) {
                        return { invalidEmail: true };
                    }
                    else {
                        return null;
                    }
                };
                return CustomValidators;
            }());
            exports_1("CustomValidators", CustomValidators);
        }
    }
});
//# sourceMappingURL=custom-validators.component.js.map