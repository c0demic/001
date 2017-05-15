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
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import {cyan500, indigo900} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

var meng = require('approot/js/ui/material/meng.png');
var taiji = require('approot/js/ui/material/logoTaiji.jpg');

injectTapEventPlugin();

const mainHeaderTheme = getMuiTheme(
    {
        palette: {
            textcolor: cyan500,
            primary1Color: indigo900,
        },
        appBar: {
            height: 50,
            backgroundColor: indigo900,
        }
    }
)

const leftBanTheme = getMuiTheme(
    {
        palette: {
            textcolor: cyan500,
            primary1Color: indigo900,
        },
    }
)

class MainHeader extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={mainHeaderTheme}>
                <div className={css(styles.headerbar)}>
                    <AppBar

                        // className={css(headerStyles.backgroundColor)}
                        title="CASSACAVO"
                        //iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton={false}
                    >
                    </AppBar>
                    <Tabs>
                        <Tab label="test1"></Tab>
                        <Tab label="est2"></Tab>
                        <Tab label="test3"></Tab>
                    </Tabs>
                </div>
            </MuiThemeProvider>
        );
    }
}
class LeftBan extends React.Component {
    render() {
        return (
            <MuiThemeProvider >
                <div className={css(styles.leftBan)}>
                    <List>
                        <ListItem primaryText="Text" leftIcon={<ContentInbox />}/>
                        <ListItem primaryText="Text1" leftIcon={<ContentInbox />}/>
                        <ListItem primaryText="Text2" leftIcon={<ContentInbox />}/>
                        <ListItem primaryText="Text3" leftIcon={<ContentInbox />}/>
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
}


const headerStyles = StyleSheet.create(
    {
        backgroundColor: 'black',
    }
);

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

 */
const styles = StyleSheet.create({
    logo: {
        'position': 'absolute',
        'magin-left': '0px',
        'margin-top': '0px',
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
    },
    leftBan: {
        position: 'relative',
        'margin-top': '53px',
        width: 200,
        height: 200,
        'background': 'blue'
    },
});

class HeaderGroup extends React.Component {
    render() {
        return (
            <div>
                <MainHeader />
                <LeftBan />
            </div>
        );
    }
}
ReactDOM.render(
    <HeaderGroup />,
//    <MainHeader />,
    document.getElementById('header')
);