import React, { Component } from 'react';
import Block from './Block'
import './Tablero.css'

export default class Board extends Component {
    render(){
        return (
            <div className="tablero">
                {
                    this.props.mapComponent
                        .map((component) => {
                            return <Block
                                block={component}
                            />;
                        })
                }
            </div>
        );
    }
}