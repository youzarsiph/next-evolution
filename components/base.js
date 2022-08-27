import { Component } from "react";

class Base extends Component {
  /**
   * Parent of all components
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Creation fof the element
    this.element = this.createElement();
  }

  getElement() {
    /**
     * A method to define the element
     */
    return <div>{this.props.children}</div>;
  }

  getClassName() {
    /**
     * A method to define the classNames of the element
     */
    return "";
  }

  createElement() {
    /**
     * A method to create the element
     */
    let element = this.getElement();
    element.classList.add(this.getClassName());
    return element;
  }

  render() {
    return this.element;
  }
}
