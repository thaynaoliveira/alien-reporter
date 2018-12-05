import React, { Component } from 'react';

export default class Footer extends Component {

    openWebsite(e, url, type){
        e.preventDefault();
        window.open(url, type);
    }

    render() {
        return (
            <footer>
                <div className="footer-content">
                    <div className="footer-content__company">
                        <img src="../../images/white-logo.png" onClick={(e) => this.openWebsite(e, 'http://www.mobil-i.com/', 'mobil')} />
                    </div>
                    <div className="footer-content__developer">
                        <img src="../../images/dev.jpg" />
                        <h4 onClick={(e) => this.openWebsite(e, 'https://www.linkedin.com/in/thaynaoliveira1/', 'linkedin')} >Thayná Oliveira</h4>
                    </div>
                </div>
            </footer>
        );
    }
}