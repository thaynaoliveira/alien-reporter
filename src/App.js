import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header/>
                <content>
                    {this.props.loading && <Loading />}
                    {this.props.children}
                </content>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.loading
    };
}

export default connect(mapStateToProps)(App);