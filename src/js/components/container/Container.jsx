import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Converter } from "../presentational/Converter.jsx";

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleFtoC = this.handleFtoC.bind(this);
        this.handleCtoF = this.handleCtoF.bind(this);
        this.state = {
          convert: (32-32)*(5/9)
        }
    }

    handleCtoF() {
      const number = document.getElementById('number');
      const n = number.value;

      this.setState({
        convert: (n * 9/5) + 32
      });

    }
    handleFtoC() {
      const number = document.getElementById('number');
      const n = number.value;

      this.setState({
        convert: (n-32)*(5/9)
      });

    }
    render() {
        return (
          <main>
            <h1>Convert Away!</h1>
            <Converter
              handleFtoC={this.handleFtoC}
              handleCtoF={this.handleCtoF}
              convert={this.state.convert}
            />

          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
