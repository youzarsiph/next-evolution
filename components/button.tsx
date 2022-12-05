import { gradients } from "./constants";
import { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      color: props.color || "primary",
      size: props.size || "md",
      isPill: props.pill || false,
      isOutline: props.outline || false,
      isGradient: props.gradient || false,
    };

    this.colors = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      danger: "btn-danger",
      light: "btn-light",
      dark: "btn-dark",
    };

    this.outlines = {
      primary: "btn-outline-primary",
      secondary: "btn-outline-secondary",
      info: "btn-outline-info",
      success: "btn-outline-success",
      warning: "btn-outline-warning",
      danger: "btn-outline-danger",
      light: "btn-outline-light",
      dark: "btn-outline-dark",
    };

    this.sizes = {
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    };
  }

  componentDidMount() {
    if (this.state.color) {
      this.setState({
        color: this.state.isOutline
          ? this.outlines[this.state.color]
          : this.colors[this.state.color],
      });
    }

    if (this.state.size) {
      this.setState({ size: this.sizes[this.state.size] });
    }

    if (this.state.isPill) {
      this.setState({ modifier: "rounded-full px-4" });
    }

    if (this.state.isGradient) {
      this.setState({ modifier: `bg-gradient ${gradients[this.state.color]}` });
    }
  }

  render() {
    let result;

    const btn = (
      <button
        type={this.props.type}
        className={`btn ${this.state.color} ${this.state.size || ""} ${
          this.state.modifier || ""
        } ${this.props.className || ""}`}
      >
        {this.props.children}
      </button>
    );

    if (this.state.isGradient) {
      result = (
        <div className={"relative inline-block"}>
          <div
            className={`bg-gradient gradient-${this.props.color} absolute -inset-1 animate-pulse rounded-lg blur`}
          ></div>
          {btn}
        </div>
      );
    } else {
      result = btn;
    }

    return result;
  }
}
