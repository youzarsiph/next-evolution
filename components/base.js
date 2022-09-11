import React, { Component } from "react";

class Base extends Component {
  /**
   * Parent of all components
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Creation of the element
    this.attributes = this.getAttributes();
    this.element = this.createElement();
  }

  getElement() {
    /**
     * A method to define the element
     */
    return <div>{this.props.children}</div>;
  }

  getAttributes() {
    // A method to define the attributes of an element
    return {};
  }

  createElement() {
    /**
     * A method to create the element
     */
    return React.createElement("div", this.attributes);
  }

  render() {
    return this.element;
  }
}

export class Test extends Base {
  getAttributes() {
    return {
      id: "myID",
      className:
        "flex items-center justify-center h-96 mx-40 rounded-xl bg-gradient gradient-success",
      children: "NextEvolution",
    };
  }
}
