/*
 added by Lixin
 20170508 first time
 */

import React from 'react';
import ReactDOM from 'react-dom';

//var meng = require('../material/meng.png');

const headerStyle = {
    color: 'blue',
    background: 'black'
}


class Header extends React.Component {
    render() {
        return (
            <div id="titleText" style={headerStyle}>
                <h1>CASSACAVO</h1>
                <img src={require('/playground/MyWeb/IDEA/gradle001/src/main/webapp/js/ui/material/logoTaiji.jpg')} />
            </div>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);