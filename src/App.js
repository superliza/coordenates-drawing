import React, { Component } from 'react';
import './App.css';
import Forms from './components/Forms';
import Square from './components/Square';
import './components/Square/styles.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      coordenateX: 0,
      coordenateY: 0,
      lengthZ: 0
    };

    this.handleCoordenateX = this.handleCoordenateX.bind(this);
    this.handleCoordenateY = this.handleCoordenateY.bind(this);
    this.handleLengthZ = this.handleLengthZ.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(hola) {
    this.setState({coordenateX: hola});
  }

  handleCoordenateX(x) {
    this.setState({coordenateX: x});
  }

  handleCoordenateY(y) {
    this.setState({coordenateY: y});
  }

  handleLengthZ(z) {
    this.setState({lengthZ: z})
  }

  // handleSubmit={this.handleSubmit}

  render() {
    return (
      <div className="App">
        <Forms 
        handleCoordenateX={this.handleCoordenateX} 
        handleCoordenateY={this.handleCoordenateY} 
        handleLengthZ={this.handleLengthZ} 
        handleSubmit={this.handleSubmit}/> 
        <Square coordenateX={this.state.coordenateX} coordenateY={this.state.coordenateY} lengthZ={this.state.lengthZ}/>
      </div>
    );
  }
}

export default App;
