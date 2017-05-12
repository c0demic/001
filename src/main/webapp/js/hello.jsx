'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

function Hello(props) {
    return (<span className={css(styles.red, styles.hover)}>hello</span>);
}
const styles = StyleSheet.create({
    red: {
        backgroundColor: 'red'
    },

    hover:{
        ':hover': {
            backgroundColor: 'blue'
        }
    }
});

ReactDOM.render(<Hello />, document.getElementById('hello'));