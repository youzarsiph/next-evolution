import { Component } from "react";

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
