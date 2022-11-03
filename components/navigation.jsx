import Link from "next/link";
import { Component } from "react";

export class Breadcrumb extends Component {
  render() {
    return (
      <nav role={"navigation"} className={"my-4 border-y p-4"}>
        <ol className={`breadcrumb ${this.props.className || ""}`}>
          {this.props.children}
        </ol>
      </nav>
    );
  }
}

export class BreadcrumbItem extends Component {
  render() {
    return (
      <>
        <li>{this.props.children}</li>
        <li role={"presentation"} className={"breadcrumb-item"}>
          »
        </li>
      </>
    );
  }
}

export class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className={`navbar ${this.props.className || ""}`}>
          {this.props.children}
        </nav>
      </header>
    );
  }
}

export class NavbarContainer extends Component {
  render() {
    return (
      <div className={`navbar-container ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class NavbarBrand extends Component {
  render() {
    return (
      <span className={`navbar-brand ${this.props.className || ""}`}>
        <Link href={this.props.href}>{this.props.children}</Link>
      </span>
    );
  }
}

export class NavbarMenu extends Component {
  constructor(props) {
    super(props);

    // Binding methods
    this.onChange = this.onChange.bind(this);

    // State
    this.state = {
      isOpen: false,
    };
  }

  onChange() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <input
          type={"checkbox"}
          id={this.props.id}
          onChange={this.onChange}
          className={`peer sr-only`}
          checked={this.state.isOpen}
        />
        <label
          htmlFor={this.props.id}
          className={"fixed inset-0 z-40 hidden peer-checked:block lg:hidden"}
        ></label>
        <ul className={`navbar-menu ${this.props.className || ""}`}>
          {this.props.children}
        </ul>
      </>
    );
  }
}

export class MenuToggler extends Component {
  render() {
    return (
      <button className={`navbar-toggler group ${this.props.className || ""}`}>
        <label
          id={this.props.id}
          htmlFor={this.props.menuID}
          className={"navbar-toggle-icon group-active:show"}
        ></label>
      </button>
    );
  }
}

export class MenuItem extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      isHeading: this.props.heading,
      modifier: "",
    };
  }

  componentDidMount() {
    if (this.state.isHeading) {
      this.setState({ modifier: "navbar-menu-heading px-0" });
    }
  }

  render() {
    return (
      <li
        className={`navbar-menu-item ${this.state.modifier} ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </li>
    );
  }
}

export class Pagination extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      modifier: this.props.className,
    };
  }

  render() {
    return (
      <nav aria-label={this.props.ariaLabel} className={"my-4"}>
        <ol className={`pagination ${this.state.modifier}`}>
          {this.props.children}
        </ol>
      </nav>
    );
  }
}

export class PaginationItem extends Component {
  render() {
    return (
      <li className={`pagination-item ${this.props.className || ""}`}>
        {this.props.children}
      </li>
    );
  }
}
