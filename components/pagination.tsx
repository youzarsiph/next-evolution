import { Component } from "react";

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
