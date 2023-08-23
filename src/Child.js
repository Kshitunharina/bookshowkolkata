import React from "react";
import "./Child.css";
class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={this.props.x}></img>
      </div>
    );
  }
}

export default Child;
