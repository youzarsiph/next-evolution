import { Component } from "react";

const gradients = {
  primary: "gradient-primary",
  secondary: "gradient-secondary",
  info: "gradient-info",
  success: "gradient-success",
  warning: "gradient-warning",
  danger: "gradient-danger",
  light: "gradient-light",
  dark: "gradient-dark",
};

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
        className={`btn ${this.state.color} ${this.state.size} ${
          this.state.modifier
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

export class Card extends Component {
  render() {
    return (
      <div className={`card ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class CardHeader extends Component {
  render() {
    return (
      <header className={`card-header ${this.props.className || ""}`}>
        {this.props.children}
      </header>
    );
  }
}

export class CardBody extends Component {
  render() {
    return (
      <div className={`card-body ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class CardFooter extends Component {
  render() {
    return (
      <footer className={`card-footer ${this.props.className || ""}`}>
        {this.props.children}
      </footer>
    );
  }
}

export class Carousel extends Component {
  render() {
    return (
      <div className={"relative flex w-full items-center"}>
        <button
          className={"absolute left-0 flex items-center justify-center"}
          onClick={() => {
            document
              .querySelector(".carousel-content > div.hidden")
              .classList.toggle("hidden");
            document
              .querySelector(".carousel-content > div:not(hidden)")
              .classList.toggle("hidden");
          }}
        >
          <span className={"carousel-prev-btn"}></span>
        </button>
        <div className={"carousel-content flex w-full items-center"}>
          <div
            className={
              "bg-gradient gradient-info hidden h-80 w-full rounded-lg"
            }
          ></div>
          <div
            className={"bg-gradient gradient-primary h-80 w-full rounded-lg"}
          ></div>
          <div
            className={
              "bg-gradient gradient-success hidden h-80 w-full rounded-lg"
            }
          ></div>
        </div>
        <button className={"absolute right-0 flex items-center justify-center"}>
          <span className={"carousel-next-btn"}></span>
        </button>
      </div>
    );
  }
}

export class Skeleton extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      type: props.type || "square",
    };

    this.types = {
      text: "skeleton-text",
      circle: "skeleton-circle",
      square: "skeleton-square",
    };
  }

  componentDidMount() {
    if (this.state.type) {
      this.setState({ type: this.types[this.state.type] });
    }
  }

  render() {
    return (
      <span
        role={"status"}
        title={"Loading"}
        className={`skeleton ${this.state.type} ${this.props.className || ""}`}
      />
    );
  }
}

export class Spinner extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      color: props.color || "primary",
      type: props.type || "border",
    };

    this.colors = {
      primary: "spinner-primary",
      secondary: "spinner-secondary",
      info: "spinner-info",
      success: "spinner-success",
      warning: "spinner-warning",
      danger: "spinner-danger",
      light: "spinner-light",
      dark: "spinner-dark",
    };

    this.types = {
      border: "spinner-border",
      circle: "spinner-circle",
      filled: "spinner-filled",
      gradient: "spinner-gradient",
    };
  }

  componentDidMount() {
    if (this.state.color) {
      this.setState({ color: this.colors[this.state.color] });
    }

    if (this.state.type) {
      this.setState({ type: this.types[this.state.type] });
    }
  }

  render() {
    return (
      <span className={"spinner-container"}>
        <span
          role={"status"}
          title={"Loading"}
          className={`spinner ${this.state.color} ${this.state.type} ${
            this.props.className || ""
          }`}
        >
          {this.props.children}
        </span>
      </span>
    );
  }
}

export class Table extends Component {
  render() {
    return (
      <div
        className={`mb-4 overflow-auto rounded-lg border ${
          this.props.className || ""
        }`}
      >
        <table>{this.props.children}</table>
      </div>
    );
  }
}

export class TableHeader extends Component {
  render() {
    return <thead>{this.props.children}</thead>;
  }
}

export class TableHeaderCell extends Component {
  render() {
    return (
      <th scope={this.props.scope} colSpan={this.props.colSpan}>
        {this.props.children}
      </th>
    );
  }
}

export class TableBody extends Component {
  render() {
    return <tbody>{this.props.children}</tbody>;
  }
}

export class TableRow extends Component {
  render() {
    return <tr>{this.props.children}</tr>;
  }
}

export class TableCell extends Component {
  render() {
    return (
      <td scope={this.props.scope} colSpan={this.props.colSpan}>
        {this.props.children}
      </td>
    );
  }
}

export class TableFooter extends Component {
  render() {
    return <tfoot>{this.props.children}</tfoot>;
  }
}
