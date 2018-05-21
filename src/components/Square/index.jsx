import React, { Component } from 'react';

export default class Square extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Square">
                <svg width="120" height="120" viewBox="0 0 120 120">
                    <rect x="10" y="10" width="100" height="100"></rect>
                </svg>
            </div>
        )
    }
}