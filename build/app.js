/// <reference path='../typings/index.d.ts'/>
System.register(['react', 'react-dom', 'redux', 'react-redux', 'react-router', './homepage', './events', './industry', './decal', './about', './donate', './reductions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var React, ReactDOM, redux_1, react_redux_1, react_router_1, homepage_1, events_1, industry_1, decal_1, about_1, donate_1, reductions_1;
    var store;
    return {
        setters:[
            function (React_1) {
                React = React_1;
            },
            function (ReactDOM_1) {
                ReactDOM = ReactDOM_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (react_router_1_1) {
                react_router_1 = react_router_1_1;
            },
            function (homepage_1_1) {
                homepage_1 = homepage_1_1;
            },
            function (events_1_1) {
                events_1 = events_1_1;
            },
            function (industry_1_1) {
                industry_1 = industry_1_1;
            },
            function (decal_1_1) {
                decal_1 = decal_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (donate_1_1) {
                donate_1 = donate_1_1;
            },
            function (reductions_1_1) {
                reductions_1 = reductions_1_1;
            }],
        execute: function() {
            store = redux_1.createStore(function (state, action) {
                var reducer = reductions_1.default[action.type];
                return reducer != null ? reducer(state, action) : state;
            }, {
                homepage: "default",
                events: "default",
                industry: "default",
                decal: "default",
                about: "default",
                donate: "default"
            });
            ReactDOM.render(React.createElement("div", {className: "background"}, 
                React.createElement("div", {className: "wrapper"}, 
                    React.createElement("div", {className: "header"}, 
                        React.createElement(react_redux_1.Provider, {store: store}, 
                            React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, 
                                React.createElement(react_router_1.Route, {path: "/", component: homepage_1.Homepage}), 
                                React.createElement(react_router_1.Route, {path: "events(/:page)", component: events_1.Events}), 
                                React.createElement(react_router_1.Route, {path: "industry(/:page)", component: industry_1.Industry}), 
                                React.createElement(react_router_1.Route, {path: "decal(/:page)", component: decal_1.Decal}), 
                                React.createElement(react_router_1.Route, {path: "about(/:page)", component: about_1.About}), 
                                React.createElement(react_router_1.Route, {path: "donate(/:page)", component: donate_1.Donate}))
                        )
                    )
                )
            ), document.getElementById("content"));
        }
    }
});
//# sourceMappingURL=app.js.map