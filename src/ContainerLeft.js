import React, { Component } from 'react';
import './ContainerLeft.css'

export default class ContainerLeft extends Component {
    render(){
        return (
            <div className="containerLeft">
                <div className="floor">
                    <h2>Piso</h2>
                    <h2>{this.props.floor}</h2>
                </div>
                <div className="life">
                    <h2>Vida</h2>
                    <h2>{this.props.life}</h2>
                </div>
            </div>
        );
    }
}