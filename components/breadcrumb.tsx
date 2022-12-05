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
