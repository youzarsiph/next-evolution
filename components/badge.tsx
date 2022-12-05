import { Component } from "react";

export class Badge extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      color: props.color || "primary",
      isPill: props.pill || false,
      isOutline: props.outline || false,
      modifier: "",
    };

    this.colors = {
      primary: "badge-primary",
      secondary: "badge-secondary",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      danger: "badge-danger",
      light: "badge-light",
      dark: "badge-dark",
    };

    this.outlines = {
      primary: "badge-outline-primary",
      secondary: "badge-outline-secondary",
      info: "badge-outline-info",
      success: "badge-outline-success",
      warning: "badge-outline-warning",
      danger: "badge-outline-danger",
      light: "badge-outline-light",
      dark: "badge-outline-dark",
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

    if (this.state.isPill) {
      this.setState({ modifier: "rounded-full px-4" });
    }
  }

  render() {
    return (
      <span
        className={`badge ${this.state.color} ${this.state.modifier} ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </span>
    );
  }
}
