import React, { Component } from 'react';

export class Converter extends Component {
  constructor(props) {
    super(props);
    this.handleStyles = this.handleStyles.bind(this);
    this.state = {
      isSelected: false,
      converter: 'CtoF'
    }
  }

  handleStyles() {
    const isSelected = this.state.isSelected;
    const handle = isSelected ? false : true

    this.setState({
      isSelected: handle
    })
  }

render() {

    return (
      <div className="converter">
        <div className="selector">
          <p className={!this.state.isSelected ? 'selected' : ''} onClick={!this.state.isSelected ? null : this.handleStyles} id="CtoF"><span>C&#176;</span> to <span>F&#176;</span></p>
          <p className={this.state.isSelected ? 'selected' : ''} onClick={this.state.isSelected ? null : this.handleStyles} id="FtoC"><span>F&#176;</span> to <span>C&#176;</span></p>
        </div>

        <input id="number" type="number" />
        <button onClick={this.props.handleConvert} >Convert</button>
        <p>Converted: {this.props.convert} </p>
      </div>

    );
  }
}