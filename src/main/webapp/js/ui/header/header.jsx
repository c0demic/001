/*
 added by Lixin
 20170508 first time
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Style} from 'radium'
import {StyleSheet, css} from 'aphrodite';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
var meng = require('approot/js/ui/material/meng.png');
var taiji = require('approot/js/ui/material/logoTaiji.jpg');

class MainHeader extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="CASSACAVO"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
            </MuiThemeProvider>
        );
    }
}
/*
 class Header extends React.Component {

 render() {
 return (
 <div id="logoCASSACA" className={css(styles.headerbar)}>
 <img className={css(styles.logo)} src={meng}/>
 <text className={css(styles.text)}>{this.props.text}</text>
 </div>
 );
 }
 }
 const styles = StyleSheet.create({
 logo: {
 'position': 'absolute',
 'magin-left': '0px',
 'width': 45,
 'height': 45
 },
 headerbar: {
 position: 'relative',
 background: 'black',
 height: 45,
 width: '100%',
 //        'text-align': 'center'
 },
 text: {
 margin: '52px',
 height: '20px',
 position: 'relative',
 top: '10px',
 'vertical-align': 'middle'
 }
 });
 */
ReactDOM.render(
    <MainHeader />,
    document.getElementById('header')
);