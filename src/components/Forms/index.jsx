import React, { Component } from 'react';

export default class Forms extends Component {
    constructor(props) {
        super(props)

        this.handleX = this.handleX.bind(this);
        this.handleY = this.handleY.bind(this);
        this.handleZ = this.handleZ.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

    handleSub(event) {
        event.preventDefault();
        this.props.handleSubmit(console.log("hola"));
        
    }

    handleX(event) {
        this.props.handleCoordenateX(event.target.value);
    }

    handleY(event) {
        this.props.handleCoordenateY(event.target.value);
    }

    handleZ(event) {
        this.props.handleLengthZ(event.target.value);
    }


    render() {
        // onSubmit={this.handleSub}
        return(
            <div>
                <form onSubmit={this.handleSub}>
                    <label>Coordenate x
                        <input type="number" value={this.props.coordenateX} onKeyUp={this.handleX}/>
                    </label>
                    <label>Coordenate y
                        <input type="number" value={this.props.coordenateY} onKeyUp={this.handleY}/>
                    </label>
                    <label>length z
                        <input type="number" value={this.props.lengthZ} onKeyUp={this.handleZ}/>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}