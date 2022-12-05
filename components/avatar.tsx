import { Component } from "react";
import { gradients } from "./constants";

export class Avatar extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      color: props.color || "primary",
      size: props.size || "md",
      isGradient: props.gradient || false,
      modifier: "",
    };

    this.colors = {
      primary: "avatar-primary",
      secondary: "avatar-secondary",
      info: "avatar-info",
      success: "avatar-success",
      warning: "avatar-warning",
      danger: "avatar-danger",
      light: "avatar-light",
      dark: "avatar-dark",
    };

    this.sizes = {
      sm: "avatar-sm",
      md: "",
      lg: "avatar-lg",
    };
  }

  componentDidMount() {
    if (this.state.color) {
      this.setState({ color: this.colors[this.state.color] });
    }

    if (this.state.size) {
      this.setState({ size: this.sizes[this.state.size] });
    }

    if (this.state.isGradient) {
      this.setState({ modifier: `bg-gradient ${gradients[this.state.color]}` });
    }
  }

  render() {
    return (
      <span
        className={`avatar ${this.state.color} ${this.state.size} ${
          this.state.modifier
        } ${this.props.className || ""}`}
      >
        {this.props.children}
      </span>
    );
  }
}
