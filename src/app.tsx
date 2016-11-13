/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Immutable from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import {Dashboard} from './dashboard';
import {Homepage} from './homepage';
import {Events} from './events';
import {Industry} from './industry';
import {Decal} from './decal/decal';
import {About} from './about';
import {Donate} from './donate';
import {Hope, HopeFaq, HopeResources, HopeArchive} from './decal/hope';
import {Micromouse} from './decal/micromouse';

import {Navigation} from './navigation';

import reductions from './reductions';

let store = createStore(reductions.reducer, reductions.defaults);

ReactDOM.render(
    <div className="background">
		<div className="wrapper">
			<div className="header">
				<Provider store={store}>
					<Router history={browserHistory}>
						<Route path="/" component={Dashboard}>
							<IndexRoute component={Homepage} />
							<Route path="events(/:page)" component={Events} />
							<Route path="industry(/:page)" component={Industry}/>
							<Route path="decal(:/page)" component={Decal}>
								<Route path="hope(:/page)" component={Hope}>
									<Route path="faq" component={HopeFaq} />
									<Route path="resources" component={HopeResources} />
									<Route path="archive" component={HopeArchive} />
								</Route>
								<Route path="micromouse" component={Micromouse} />
							</Route>
							<Route path="about(/:page)" component={About} />
							<Route path="donate(/:page)"  component={Donate} />
						</Route>
					</Router>
				</Provider>
			</div>
		</div>
    </div>,
    document.getElementById("content"));