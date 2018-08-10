import React, { Component } from 'react';
import './ContainerRight.css'

export default class ContainerRight extends Component {
    render(){
        return (
            <div className="containerRight">
                <div className="reset">
                    <h2>Actualizar</h2>
                    <h2>{this.props.floor}</h2>
                </div>
                <div className="move">
                    <h2>Movimientos</h2>
                </div>
            </div>
        );
    }
}