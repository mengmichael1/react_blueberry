/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

@connect(
  (state) => ({}),
  (dispatch) => ({})
)

export class Industry extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h1>Industry</h1>
            </div>
        );
    }
}
