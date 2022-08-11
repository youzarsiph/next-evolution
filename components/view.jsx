import { Component } from "react";

class Main extends Component {
  /**
   * Base component that contains common attributes between components
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Handling variants
    if (this.props.outline) {
      this.variants = this.getOutlineVarriants();
    } else {
      this.variants = this.getVariants();
    }

    // Modifier class
    this.modifierClass = this.variants[this.props.color];
  }

  getVariants() {
    /**
     * A method to define varinats of a component
     */
  }

  getOutlineVarriants() {
    /**
     * A method to define outline variants of a component
     */
  }
}

export class Alert extends Main {
  constructor(props) {
    super(props);

    // Handling modifier class
    if (this.props.flushed) {
      this.modifierClass += " alert-flushed";
    }
    if (this.props.modern) {
      this.modifierClass += " alert-modern";
    }
  }

  getVariants() {
    return {
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

  render() {
    return (
      <div className={`alert ${this.modifierClass}`} role={"alert"}>
        {this.props.children}
      </div>
    );
  }
}

export class Badge extends Main {
  constructor(props) {
    super(props);

    // Handling modifier class
    if (this.props.pill) {
      this.modifierClass += " rounded-full px-4";
    }
  }

  getVariants() {
    return {
      primary: "badge-primary",
      secondary: "badge-secondary",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      danger: "badge-danger",
      light: "badge-light",
      dark: "badge-dark",
    };
  }

  getOutlineVarriants() {
    return {
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

  render() {
    return (
      <span className={`badge ${this.modifierClass}`}>
        {this.props.children}
      </span>
    );
  }
}

export class Button extends Main {
  constructor(props) {
    super(props);

    // Handling variants
    if (this.props.pill) {
      this.modifierClass += " rounded-full";
    }
  }

  getVariants() {
    return {
      primary: "btn-primary",
      secondary: "btn-secondary",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
      danger: "btn-danger",
      light: "btn-light",
      dark: "btn-dark",
    };
  }

  getOutlineVarriants() {
    return {
      primary: "btn-outline-primary",
      secondary: "btn-outline-secondary",
      info: "btn-outline-info",
      success: "btn-outline-success",
      warning: "btn-outline-warning",
      danger: "btn-outline-danger",
      light: "btn-outline-light",
      dark: "btn-outline-dark",
    };
  }

  render() {
    return (
      <button type={this.props.type} className={`btn ${this.modifierClass}`}>
        {this.props.children}
      </button>
    );
  }
}

export class Card extends Component {
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

export class CardHeader extends Component {
  render() {
    return <div className="card-header">{this.props.children}</div>;
  }
}

export class CardBody extends Component {
  render() {
    return <div className="card-body">{this.props.children}</div>;
  }
}

export class CardFooter extends Component {
  render() {
    return <div className="card-footer">{this.props.children}</div>;
  }
}
