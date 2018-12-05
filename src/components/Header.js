import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      	<header>
			<div className="header-content">
                <div className="header-content__alien">
                    <img src="../../images/alien.png" />
                    <h2>Alien Reporter</h2>
                </div>
                <div className="header-content__company">
                    <img src="../../images/main-logo.png" />
                </div>
            </div>
		</header>
    );
  }
}