import React, { Component } from 'react';
import Reports from '../containers/Reports';

export default class Home extends Component {
  render() {
    return (
      	<div className="home" style={{minHeight: window.innerHeight - 178}}>
            <div className="home__description">
                <h4>Specialist in Alien tracking</h4>
                <div className="divisor"></div>
            </div>
            <Reports />
		</div>
    );
  }
}