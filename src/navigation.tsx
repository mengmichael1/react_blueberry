/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import { Router, Route, Link, hashHistory, useRouterHistory } from 'react-router';

export class Navigation extends React.Component<any, any> {
  render() {
  return (
    <div>
        <Link to="/">
          <img src="../../assets/ieee_logo.png"/>
        </Link>
        <div className="navigation">
          <ul>
            <li className="main">
              <Link to="/about/info">ABOUT</Link>
            </li>
            <li className="option">
              <Link to="/about/info">Info</Link>
            </li>
            <li className="option">
              <Link to="/about/officers">Officers</Link>
            </li>
            <li className="option">
              <Link to="/about/contact">Contact</Link>
            </li>
          </ul>
          <ul>
            <li className="main">
              <Link to="/events">EVENTS</Link>
            </li>
          </ul>
          <ul>
            <li className="main">
              <Link to="/decal/about">DECAL</Link>
            </li>
            <li className="option">
              <Link to="/decal/hope">H.O.P.E</Link>
            </li>
            <li className="option">
              <Link to="/decal/micromouse">Micromouse</Link>
            </li>
          </ul>
          <ul>
            <li className="main">
              <Link to="/industry">INDUSTRY</Link>
            </li>
          </ul>
          
          <ul>
            <li className="main">
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>
        </div>
  )
  } 
}