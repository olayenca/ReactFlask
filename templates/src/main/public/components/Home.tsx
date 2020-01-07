import React, { Component } from 'react';
import '../../static/css/App.scss';

export default class Home extends Component {
    state = { load: false }
    componentDidMount() {
        console.log(this.state.load)
    }
    render() {
        return (
            <div className="home-contents">
                <div className="loading-bar"></div>
                <div className="homepage">
                    <header className="top-title"> Homepage! </header>
                </div>
            </div>
        );
    }
}