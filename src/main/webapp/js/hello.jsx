'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Radium from 'radium';

@Radium
class Hello extends React.Component {
    render() {
        return (<h1>hello</h1>);
    }
}

ReactDOM.render(<Hello />, document.getElementById('hello'));