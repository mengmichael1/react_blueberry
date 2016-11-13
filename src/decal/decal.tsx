/// <reference path='../../typings/index.d.ts'/>

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect(
  (state) => ({}),
  (dispatch) => ({})
)

export class Decal extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    
    getAboutText() {
        return (
            <div>
                <h1>Decal</h1>
                <p>
                    IEEE at Berkeley hosts two decals, Micromouse and Hands On Practical Electronics (H.O.P.E)
                </p>              
                <Link to="/decal/hope">H.O.P.E</Link>
                <br />
                <Link to="/decal/micromouse">Micromouse</Link>
            </div>
            
        )
    }

    render() {
        return (
            <div>
                {this.props.children ? this.props.children : this.getAboutText()}
            </div>
        );
    }
}
