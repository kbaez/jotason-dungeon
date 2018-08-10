import React, { Component } from 'react';
import './Carta.css'

export default class Part extends Component {

    getImage(character){
        switch (character) {
            case '@': return './assets/img/personaje.jpg'
            case 'r': return './assets/img/bicho.jpg'
            case '·': return './assets/img/piso.jpg'
            case '#': return './assets/img/pared.jpg'
            case '¬': return './assets/img/escalera.jpg'
            case '~': return './assets/img/niebla.jpg'
            default: return 'nada'
        }
    }

    render() {
        return(
            <div className="carta">
                <img src={require(`${this.getImage(this.props.character)}`)} alt="img" className="carta" />
            </div>
        );
    }
}