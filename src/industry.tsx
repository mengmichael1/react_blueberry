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
                <Navigation />
                <h1>{this.props.subPage}</h1>
            
                <div>
                    <h2>test</h2>
                </div>
            </div>

        );
    }
}
