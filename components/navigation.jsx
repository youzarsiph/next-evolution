import { Component } from "react";

export class Breadcrumb extends Component {
  render() {
    return (
      <nav
        role={"navigation"}
        className="p-4 border-y my-4"
        aria-label={this.props.ariaLabel}
      >
        <ol className="breadcrumb">{this.props.children}</ol>
      </nav>
    );
  }
}

export class BreadcrumbItem extends Component {
  render() {
    return (
      <>
        <li>{this.props.children}</li>
        <li role={"presentation"} className="last:hidden">
          »
        </li>
      </>
    );
  }
}

class MianNav extends Component {
  constructor(props) {
    super(props);

    // Base attrs
    this.id = props.id;

    // Modifier class
    this.modifierClass = "";

    if (props.sidebar) {
      this.modifierClass += " sidebar";
      this.menuClass = "flex-col";
    }

    if (props.fixed && !props.sidebar) {
      this.modifierClass = " navbar-fixed";
    }

    if (props.bordered) {
      this.modifierClass += " border";
    }

    if (props.rounded) {
      this.modifierClass += " rounded-lg";
    }
  }
}

export class Navbar extends MianNav {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <nav className={`navbar ${this.modifierClass}`}>
          {this.props.children}
        </nav>
      </header>
    );
  }
}

export class NavbarContainer extends Component {
  render() {
    return (
      <div className="flex items-center justify-between w-full lg:w-auto">
        {this.props.children}
      </div>
    );
  }
}

export class NavbarBrand extends Component {
  render() {
    return (
      <a href={this.props.href} className="navbar-brand">
        {this.props.children}
      </a>
    );
  }
}

export class NavbarMenu extends MianNav {
  render() {
    return (
      <ul
        id={this.id}
        className={`navbar-menu ${this.menuClass} lg:flex hidden`}
      >
        {this.props.children}
      </ul>
    );
  }
}

export class MenuToggler extends MianNav {
  constructor(props) {
    super(props);

    // Target element
    this.menuID = props.menuID;
  }

  render() {
    return (
      <button
        className="navbar-toggler"
        onClick={() => {
          document.getElementById(this.id).classList.toggle("show");
          document.getElementById(this.menuID).classList.toggle("hidden");
        }}
      >
        <span id={this.id} className="navbar-toggler-icon"></span>
      </button>
    );
  }
}

export class MenuItem extends Component {
  constructor(props) {
    super(props);

    // Heading
    if (props.heading) {
      this.modifierClass = "text-xl font-semibold";
    }
  }
  render() {
    return (
      <li className={`navbar-menu-item ${this.modifierClass}`}>
        {this.props.children}
      </li>
    );
  }
}

export class Pagination extends Component {
  constructor(props) {
    super(props);

    this.justifications = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    };

    this.justify = props.justify
      ? this.justifications[props.justify]
      : this.justifications["start"];
  }
  render() {
    return (
      <nav aria-label={this.props.ariaLabel} className="my-4">
        <ol
          className={`flex flex-wrap items-center ${this.justify} gap-4 pl-0`}
        >
          {this.props.children}
        </ol>
      </nav>
    );
  }
}

export class PaginationItem extends Component {
  render() {
    return (
      <li className="inline-flex items-center justify-center px-4 py-2 border rounded-lg shadow-sm transition-all hover:shadow-lg active:translate-y-1">
        {this.props.children}
      </li>
    );
  }
}
