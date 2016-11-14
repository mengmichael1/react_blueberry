System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var nav;
    return {
        setters:[],
        execute: function() {
            nav = function (state, action) {
                var newState = Object.assign({}, state);
                newState[action.parent] = action.page;
                return newState;
            };
            exports_1("default",{
                NAV: nav
            });
        }
    }
});
//# sourceMappingURL=reductions.js.map