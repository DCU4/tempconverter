import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Converter } from "../presentational/Converter.jsx";

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleConvert = this.handleConvert.bind(this);
        this.state = {
          convert: null
        }
    }


    handleConvert() {
      const convert = this.state.convert;
      const number = document.getElementById('number');
      // (100°F − 32) × 5/9 = 37.778°C
      const n = number.value;
      console.log((n-32)*(5/9));

      this.setState({
        convert: (n-32)*(5/9)
      });

    }
    render() {
        return (
          <main>
            <h1>Convert Away!</h1>
            <Converter
              handleConvert={this.handleConvert}
              convert={this.state.convert}
            />

          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
