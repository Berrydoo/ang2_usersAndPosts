System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UtilComponent;
    return {
        setters:[],
        execute: function() {
            UtilComponent = (function () {
                function UtilComponent() {
                }
                UtilComponent.sortUsers = function (users) {
                    return users.sort(function (a, b) {
                        var nameA = a.name.toLowerCase();
                        var nameB = b.name.toLowerCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    });
                };
                return UtilComponent;
            }());
            exports_1("UtilComponent", UtilComponent);
        }
    }
});
//# sourceMappingURL=util.component.js.map