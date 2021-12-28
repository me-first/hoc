import React, { Component } from "react";
import withArray from "./withArray";

class Count extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increase}>Click to increase</button>
        <div>[{this.props.updatedArr.join(",")}]</div>
        <div>Array Length: {this.props.updatedArr.length}</div>
      </div>
    );
  }
}

const EnhancedArray = withArray(Count, [1]);

export default EnhancedArray;
