/// <reference path='../typings/index.d.ts'/>
System.register(['react', 'react-dom', 'react-redux'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_dom_1, react_redux_1;
    var Deps, DepsRedux, ignore;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            }],
        execute: function() {
            // var a = ES6.Object.assign({});
            // var store = createStore((state, action) => state, {});
            Deps = (function (_super) {
                __extends(Deps, _super);
                function Deps() {
                    _super.apply(this, arguments);
                }
                Deps.prototype.render = function () {
                    return React.createElement("div", null, "Hello, World!");
                };
                return Deps;
            }(React.Component));
            DepsRedux = react_redux_1.connect(function (state) { return ({}); }, function (dispatch) { return ({}); })(Deps);
            ignore = function () { return react_dom_1.render(React.createElement(Deps, null), document.body); };
        }
    }
});
//# sourceMappingURL=deps.js.map