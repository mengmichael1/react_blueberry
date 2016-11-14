/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import {Navigation} from './navigation';

@connect(
  (state) => ({}),
  (dispatch) => ({})
)

export class Dashboard extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <Navigation />
            {this.props.children}
            </div>
        );
    }
}