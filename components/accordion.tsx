import { Component } from "react";

export class Accordion extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      isFlushed: props.flushed,
      modifier: "",
    };
  }

  componentDidMount() {
    if (this.state.isFlushed) {
      this.setState({ modifier: "accordion-flushed" });
    }
  }

  render() {
    return (
      <ul
        className={`accordion ${this.state.modifier} ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </ul>
    );
  }
}

export class AccordionItem extends Component {
  render() {
    return (
      <li className={`accordion-item ${this.props.className || ""}`}>
        {this.props.children}
      </li>
    );
  }
}

export class AccordionButton extends Component {
  constructor(props) {
    super(props);

    // Binding methods
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

    // State
    this.state = {
      collapsed: true,
    };
  }

  onChange() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  onClick() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <>
        <input
          type={"checkbox"}
          id={this.props.id}
          onChange={this.onChange}
          className={"peer sr-only"}
          checked={!this.state.collapsed}
        />
        <button
          type={"button"}
          onClick={this.onClick}
          className={`accordion-btn ${this.props.className || ""}`}
        >
          {this.props.children}
        </button>
        <span className={"accordion-btn-icon"} />
      </>
    );
  }
}

export class AccordionContent extends Component {
  render() {
    return (
      <div className={`accordion-content ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}
