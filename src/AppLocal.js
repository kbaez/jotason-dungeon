import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import images from './images.json'
import prueba from './prueba.json'

class AppLocal extends Component {
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {
              images.map((image) => <img src={require(`${image.img}`)} alt="logo" />)
          }
      </div>
    );
  }
}

export default AppLocal;
