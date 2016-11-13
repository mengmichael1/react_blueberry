/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

@connect(
  (state) => ({}),
  (dispatch) => ({
    // nav: (url) => {
    //   let action = { type: 'NAV', parent: "homepage", page: url }; 
    //   dispatch(action);
    // }
  })
)

export class Homepage extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h1>Homepage</h1>
            </div>
        );
    }
}
