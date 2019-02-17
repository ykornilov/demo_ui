// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

@hot(module)
export default class App extends Component {
    render () {
        return (
            <h1
                style = { {
                    display:         'flex',
                    justifyContent:  'center',
                    alignItems:      'center',
                    minHeight:       '100vh',
                    backgroundColor: '#070A13',
                    color:           'white',
                    fontSize:        24,
                    fontWeight:      '600',
                    textAlign:       'center',
                } }>
                Стартовая точка
                <Button variant="contained" color="primary">
                    Hello мир
                </Button>
                <Icon>star</Icon>
            </h1>
        );
    }
}
