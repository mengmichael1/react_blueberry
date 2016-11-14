/// <reference path='../../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';

@connect(
  (state) => ({}),
  (dispatch) => ({})
)

export class Micromouse extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h1>Micromouse</h1>
            <p>We're hoping for enough interest in creating teams to participate in competitions this year with material funding covered by http://ieee.ucsd.edu/micromouse/</p>
            </div>
        );
    }
}
