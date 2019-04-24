import React, { Component } from 'react';

export class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }



render() {

    return (
      <div className="converter">
        <input id="number" type="number" />
        <button onClick={this.props.handleConvert} >Convert</button>
        <p>Converted: {this.props.convert}</p>
      </div>

    );
  }
}