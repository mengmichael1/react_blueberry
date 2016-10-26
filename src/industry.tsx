/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import {Navigation} from './navigation';

@connect(
  (state) => ({subPage: state.industry}),
  (dispatch) => ({
    nav: (url) => {
      let action = { type: 'NAV', parent: "industry", page: url }; 
      dispatch(action);
    }
  })
)

export class Industry extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.subPage != "default" && !this.props.params.page)
            this.props.nav(this.props.subPage)
        else
            this.props.nav(this.props.params.page || "default");
    }

    componentDidUpdate() {
        if (this.props.subPage != "default" && !this.props.params.page)
            this.props.nav(this.props.subPage)
        else
            this.props.nav(this.props.params.page || "default");
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
