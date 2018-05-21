import React, { Component } from 'react';

export default class Square extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Square">
                <svg width="500" height="550" viewBox="0 0 500 500">
                    <rect x={this.props.coordenateX} y={this.props.coordenateY} width={this.props.lengthZ} height={this.props.lengthZ}></rect>
                </svg>
            </div>
        )
    }
}