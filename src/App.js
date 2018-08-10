import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import ContainerLeft from './ContainerLeft';
import ContainerRight from './ContainerRight';
import keydown from 'react-keydown';

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [],
            actualizar: null,
            mapa: [],
            mover: [],
            piso: 0,
            vida: null,
            isLoading: false
        }
        //this.getCharacterToMap = this.getCharacterToMap.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://jotason-dungeon.herokuapp.com/partida/iniciar?nombre=chota')
            .then(response => response.json())
            .then(data => this.setState({ data,
                actualizar: data["actualizar"],
                mapa: data["mapa"],
                mover: data["mover"],
                piso: data["piso"],
                vida: data["vida"],
                isLoading: false  }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getCharacterToMap(){
            //TODO: arreglar el objeto undefined
            /*
            console.log("Mapa de state")
            console.log(this.state.mapa)
            console.log(Object.values(this.state.mapa))
            */
            return Object.values(this.state.mapa);
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-content">
                    <ContainerLeft floor={this.state.piso} life={this.state.vida}/>
                    <Board mapComponent={this.getCharacterToMap()}/>
                    <ContainerRight update={this.state.actualizar} move={this.state.mover}/>
                </div>
            </div>
        );
    }
}

export default App;