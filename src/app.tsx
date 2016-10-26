/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Immutable from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';

import {Homepage} from './homepage';
import {Events} from './events';
import {Industry} from './industry';
import {Decal} from './decal';
import {About} from './about';
import {Donate} from './donate';

import {Navigation} from './navigation';

import reductions from './reductions';

let store = createStore(
    (state, action) => {
        let reducer = reductions[action.type];
        return reducer != null ? reducer(state, action) : state;
    }, {
			homepage: "default",
			events: "default",
			industry: "default",
			decal: "default",
			about: "default",
			donate: "default"
		});

ReactDOM.render(
    <div className="background">
			<div className="wrapper">
				<div className="header">
					<Provider store={store}>
						<Router history={browserHistory}>
							<Route path="/" component={Homepage}/>
							<Route path="events(/:page)" component={Events}/>
							<Route path="industry(/:page)" component={Industry}/>
							<Route path="decal(/:page)" component={Decal}/>
							<Route path="about(/:page)" component={About}/>
							<Route path="donate(/:page)"  component={Donate}/>
						</Router>
					</Provider>
				</div>
			</div>
    </div>,
    document.getElementById("content"));