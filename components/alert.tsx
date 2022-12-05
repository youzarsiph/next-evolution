import { Component } from "react";

export class Alert extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      color: props.color || "primary",
      isFlushed: props.flushed || false,
      isModern: props.modern || false,
      modifier: "",
    };

    // Colors
    this.colors = {
      primary: "alert-primary",
      secondary: "alert-secondary",
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      danger: "alert-danger",
      light: "alert-light",
      dark: "alert-dark",
    };
  }

  componentDidMount() {
    if (this.state.color) {
      this.setState({ color: this.colors[this.state.color] });
    }

    if (this.state.isFlushed) {
      this.setState({ modifier: this.state.modifier + "alert-flushed" });
    }

    if (this.state.isModern) {
      this.setState({ modifier: this.state.modifier + "alert-modern" });
    }
  }

  render() {
    return (
      <div
        role={"alert"}
        className={`alert ${this.state.color} ${this.state.modifier} ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}
