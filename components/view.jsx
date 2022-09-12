import { Component } from "react";

class Main extends Component {
  /**
   * Base component that contains common attributes between components
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Attrs
    this.baseClass = "";
    this.modifierClass = "";

    // Options
    this.enableSizing = props.enableSizing;
    this.enableOutline = props.enableOutline;
    this.enableBgGradient = props.enableBgGradient;

    // Handling variants
    if (this.enableOutline) {
      // Outline
      this.variants = this.getOutlineVariants();
    } else if (this.enableBgGradient) {
      // Gradient
      this.variants = this.getGradientVariants();
    } else {
      // Default
      this.variants = this.getVariants();
    }

    if (this.enableSizing) {
      // Sizing
      let key = props.size === "" ? "md" : props.size;
      this.sizinOptions = this.getSizes();
      this.size = this.sizinOptions[key];
    } else {
      this.size = "";
    }

    // Modifier class
    this.modifierClass = this.variants[props.color];
  }

  getBaseClass() {
    /**
     * A method to define the base css class of an element
     */
  }

  getModifierClass() {
    /**
     * A method to define
     */
  }

  getVariants() {
    /**
     * A method to define variants of a component
     */
  }

  getOutlineVariants() {
    /**
     * A method to define outline variants of a component
     */
  }

  getGradientVariants() {
    return {
      primary: "gradient-primary",
      secondary: "gradient-secondary",
      info: "gradient-info",
      success: "gradient-success",
      warning: "gradient-warning",
      danger: "gradient-danger",
      light: "gradient-light",
      dark: "gradient-dark",
    };
  }

  getSizes() {
    /**
     * A method to define the size of an element
     */
  }
}

export class Accordion extends Component {
  render() {
    return <ul className="accordion">{this.props.children}</ul>;
  }
}

export class AccordionItem extends Component {
  render() {
    return <li className="accordion-item">{this.props.children}</li>;
  }
}

export class AccordionButton extends Component {
  constructor(props) {
    super(props);
    this.target = this.props.target;
  }

  render() {
    return (
      <button
        type="button"
        className="accordion-btn group"
        onClick={() => {
          document.getElementById(this.target).classList.toggle("hidden");
        }}
      >
        {this.props.children}
        <span className="accordion-btn-icon group-focus:-rotate-180 group-active:-rotate-180" />
      </button>
    );
  }
}

export class AccordionContent extends Component {
  render() {
    return (
      <p id={this.props.id} className="accordion-content hidden">
        {this.props.children}
      </p>
    );
  }
}

export class Alert extends Main {
  constructor(props) {
    super(props);

    // Attrs
    this.baseClass = "alert";

    // Options
    this.enableSizing = false;
    this.enableOutline = false;
    this.enableBgGradient = false;

    // Handling modifier class
    if (props.flushed) {
      this.modifierClass += " alert-flushed";
    }
    if (props.modern) {
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
      <div className={`${this.baseClass} ${this.modifierClass}`} role={"alert"}>
        {this.props.children}
      </div>
    );
  }
}

export class Avatar extends Main {
  constructor(props) {
    super(props);

    // Attrs
    this.baseClass = "avatar";

    // Gradient
    if (this.props.enableBgGradient) {
      this.modifierClass += " bg-gradient";
    }
  }

  getVariants() {
    return {
      primary: "avatar-primary",
      secondary: "avatar-secondary",
      info: "avatar-info",
      success: "avatar-success",
      warning: "avatar-warning",
      danger: "avatar-danger",
      light: "avatar-light",
      dark: "avatar-dark",
    };
  }

  getSizes() {
    return {
      sm: "avatar-sm",
      md: "",
      lg: "avatar-lg",
    };
  }

  render() {
    return (
      <span className={`${this.baseClass} ${this.size} ${this.modifierClass}`}>
        {this.props.children}
      </span>
    );
  }
}

export class Badge extends Main {
  constructor(props) {
    super(props);

    // Attrs
    this.baseClass = "badge";

    // Options
    this.enableSizing = false;
    this.enableBgGradient = false;

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

  getOutlineVariants() {
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
      <span className={`${this.baseClass} ${this.modifierClass}`}>
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

    // Gradient
    if (this.props.enableBgGradient) {
      this.modifierClass += " bg-gradient";
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

  getOutlineVariants() {
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

  getSizes() {
    return {
      sm: "btn-sm",
      md: "",
      lg: "btn-lg",
    };
  }

  render() {
    return (
      <button
        type={this.props.type}
        className={`btn ${this.size} ${this.modifierClass}`}
      >
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

export class Carousel extends Component {
  render() {
    return (
      <div className="relative flex w-full items-center">
        <button
          className="absolute left-0 flex items-center justify-center"
          onClick={() => {
            document
              .querySelector(".carousel-content > div.hidden")
              .classList.toggle("hidden");
            document
              .querySelector(".carousel-content > div:not(hidden)")
              .classList.toggle("hidden");
          }}
        >
          <span className="carousel-prev-btn"></span>
        </button>
        <div className="carousel-content flex w-full items-center">
          <div className="bg-gradient gradient-info hidden h-80 w-full rounded-lg"></div>
          <div className="bg-gradient gradient-primary h-80 w-full rounded-lg"></div>
          <div className="bg-gradient gradient-success hidden h-80 w-full rounded-lg"></div>
        </div>
        <button className="absolute right-0 flex items-center justify-center">
          <span className="carousel-next-btn"></span>
        </button>
      </div>
    );
  }
}

export class CardHeader extends Component {
  render() {
    return <header className="card-header">{this.props.children}</header>;
  }
}

export class CardBody extends Component {
  render() {
    return <div className="card-body">{this.props.children}</div>;
  }
}

export class CardFooter extends Component {
  render() {
    return <footer className="card-footer">{this.props.children}</footer>;
  }
}

export class Skeleton extends Main {
  constructor(props) {
    super(props);

    // Attrs
    this.baseClass = "skeleton";
    this.type = this.props.type;

    // Options
    this.enableOutline = false;
    this.enableBgGradient = false;

    if (this.type === "circle") {
      this.modifierClass += " skeleton-circle";
    } else if (this.type === "text") {
      this.modifierClass += " skeleton-text " + this.size;
    } else {
      this.modifierClass += " skeleton-square";
    }
  }

  getVariants() {
    return {};
  }

  getSizes() {
    return {
      word: "w-16",
      "2word": "w-32",
      "3word": "w-48",
      "4word": "w-64",
      "5word": "w-80",
    };
  }

  render() {
    return (
      <span
        role={"status"}
        title={"Loading"}
        className={`${this.baseClass} ${this.modifierClass}`}
      />
    );
  }
}

export class Spinner extends Main {
  constructor(props) {
    super(props);

    // Attrs
    this.baseClass = "spinner";
    this.type = this.props.type;

    // Options
    this.enableSizing = false;
    this.enableOutline = false;
    this.enableBgGradient = false;

    // Spinner types
    if (this.type === "circle") {
      this.modifierClass += " spinner-circle";
    } else if (this.type === "filled") {
      this.modifierClass += " spinner-filled";
    } else if (this.type === "gradient") {
      this.modifierClass += " spinner-gradient";
    } else {
      this.modifierClass += " spinner-border";
    }
  }

  getVariants() {
    return {
      primary: "spinner-primary",
      secondary: "spinner-secondary",
      info: "spinner-info",
      success: "spinner-success",
      warning: "spinner-warning",
      danger: "spinner-danger",
      light: "spinner-light",
      dark: "spinner-dark",
    };
  }

  render() {
    return (
      <span className="spinner-container">
        <span
          role={"status"}
          title={"Loading"}
          className={`${this.baseClass} ${this.modifierClass}`}
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
      <div className="mb-4 overflow-auto rounded-lg border">
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
  constructor(props) {
    super(props);

    if (this.props.headerCell) {
      this.element = (
        <th scope={this.props.scope} colSpan={this.props.colSpan}>
          {this.props.children}
        </th>
      );
    } else {
      this.element = (
        <td scope={this.props.scope} colSpan={this.props.colSpan}>
          {this.props.children}
        </td>
      );
    }
  }

  render() {
    return this.element;
  }
}

export class TableFooter extends Component {
  render() {
    return <tfoot>{this.props.children}</tfoot>;
  }
}
