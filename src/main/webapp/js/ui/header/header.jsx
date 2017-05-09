/*
 added by Lixin
 20170508 first time
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import PropTypes from 'prop-types';

var meng = require('../material/meng.png');
var taiji = require('../material/logoTaiji.jpg');
/*
    const
    headerStyle = {
        color: 'blue',
        background: 'black'
    }
*/
@Radium
class Header extends React.Component {

    getStyles(){
        return{
            headerStyle : {
                color: 'blue',
                background: 'black'
            }
        }
    }

    render() {
        const styles = this.getStyles();

        return (
//            <div id="titleText" style={headerStyle}>
            <div id="titleText" style={styles.headerStyle}>
                <h1>CASSACAVO</h1>
                <img src={taiji} height="42" width="42"/>
            </div>
        );
    }
}
ReactDOM.render(
    <Header />,
    document.getElementById('header')
);