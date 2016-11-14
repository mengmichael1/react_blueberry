/// <reference path='../typings/index.d.ts'/>
System.register(['react', 'react-router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var React, react_router_1;
    var Navigation;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_router_1_1) {
                react_router_1 = react_router_1_1;
            }],
        execute: function() {
            Navigation = (function (_super) {
                __extends(Navigation, _super);
                function Navigation() {
                    _super.apply(this, arguments);
                }
                Navigation.prototype.render = function () {
                    return (React.createElement("div", null, 
                        React.createElement(react_router_1.Link, {to: "/"}, 
                            React.createElement("img", {src: "../../assets/ieee_logo.png"})
                        ), 
                        React.createElement("div", {className: "navigation"}, 
                            React.createElement("ul", null, 
                                React.createElement("li", {className: "main"}, 
                                    React.createElement(react_router_1.Link, {to: "/about/info"}, "ABOUT")
                                ), 
                                React.createElement("li", {className: "option"}, 
                                    React.createElement(react_router_1.Link, {to: "/about/info"}, "Info")
                                ), 
                                React.createElement("li", {className: "option"}, 
                                    React.createElement(react_router_1.Link, {to: "/about/officers"}, "Officers")
                                ), 
                                React.createElement("li", {className: "option"}, 
                                    React.createElement(react_router_1.Link, {to: "/about/contact"}, "Contact")
                                )), 
                            React.createElement("ul", null, 
                                React.createElement("li", {className: "main"}, 
                                    React.createElement(react_router_1.Link, {to: "/events"}, "EVENTS")
                                )
                            ), 
                            React.createElement("ul", null, 
                                React.createElement("li", {className: "main"}, 
                                    React.createElement(react_router_1.Link, {to: "/decal/about"}, "DECAL")
                                ), 
                                React.createElement("li", {className: "option"}, 
                                    React.createElement(react_router_1.Link, {to: "/decal/hope"}, "H.O.P.E")
                                ), 
                                React.createElement("li", {className: "option"}, 
                                    React.createElement(react_router_1.Link, {to: "/decal/micromouse"}, "Micromouse")
                                )), 
                            React.createElement("ul", null, 
                                React.createElement("li", {className: "main"}, 
                                    React.createElement(react_router_1.Link, {to: "/industry"}, "INDUSTRY")
                                )
                            ), 
                            React.createElement("ul", null, 
                                React.createElement("li", {className: "main"}, 
                                    React.createElement(react_router_1.Link, {to: "/donate"}, "Donate")
                                )
                            ))));
                };
                return Navigation;
            }(React.Component));
            exports_1("Navigation", Navigation);
        }
    }
});
//# sourceMappingURL=navigation.js.map