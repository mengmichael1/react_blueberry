/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import {Navigation} from './navigation';

@connect(
  (state) => ({subPage: state.homepage}),
  (dispatch) => ({
    nav: (url) => {
      let action = { type: 'NAV', parent: "homepage", page: url }; 
      dispatch(action);
    }
  })
)

export class Homepage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.nav("default");
    }

    componentDidUpdate() {
        this.props.nav("default");
    }

    render() {
        return (
            <div>
            <Navigation />
            <h1>{this.props.subPage}</h1>
            </div>
        );
    }
}
