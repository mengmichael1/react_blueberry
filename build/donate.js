/// <reference path='../typings/index.d.ts'/>
System.register(['react', 'react-redux', './navigation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var React, react_redux_1, navigation_1;
    var Donate;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (navigation_1_1) {
                navigation_1 = navigation_1_1;
            }],
        execute: function() {
            Donate = (function (_super) {
                __extends(Donate, _super);
                function Donate(props) {
                    _super.call(this, props);
                }
                Donate.prototype.componentWillMount = function () {
                    if (this.props.subPage != "default" && !this.props.params.page)
                        this.props.nav(this.props.subPage);
                    else
                        this.props.nav(this.props.params.page || "default");
                };
                Donate.prototype.componentDidUpdate = function () {
                    if (this.props.subPage != "default" && !this.props.params.page)
                        this.props.nav(this.props.subPage);
                    else
                        this.props.nav(this.props.params.page || "default");
                };
                Donate.prototype.render = function () {
                    return (React.createElement("div", null, 
                        React.createElement(navigation_1.Navigation, null), 
                        React.createElement("h1", null, this.props.subPage)));
                };
                Donate = __decorate([
                    react_redux_1.connect(function (state) { return ({ subPage: state.donate }); }, function (dispatch) { return ({
                        nav: function (url) {
                            var action = { type: 'NAV', parent: "donate", page: url };
                            dispatch(action);
                        }
                    }); })
                ], Donate);
                return Donate;
            }(React.Component));
            exports_1("Donate", Donate);
        }
    }
});
//# sourceMappingURL=donate.js.map