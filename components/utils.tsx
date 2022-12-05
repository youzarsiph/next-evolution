import { Component } from "react";

export class Container extends Component {
  render() {
    return (
      <section className={`container  ${this.props.className || ""}`}>
        {this.props.children}
      </section>
    );
  }
}

export class Flex extends Component {
  render() {
    return (
      <div
        className={`mb-8 flex flex-wrap items-center gap-4 ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

export class Grid extends Component {
  constructor(props) {
    super(props);

    // Columns
    this.columns = [
      "grid-cols-1",
      "grid-cols-2",
      "grid-cols-3",
      "grid-cols-4",
      "grid-cols-5",
      "grid-cols-6",
      "grid-cols-7",
      "grid-cols-8",
      "grid-cols-9",
      "grid-cols-10",
      "grid-cols-11",
      "grid-cols-12",
    ];

    // Rows
    this.rows = [
      "grid-rows-1",
      "grid-rows-2",
      "grid-rows-3",
      "grid-rows-4",
      "grid-rows-5",
      "grid-rows-6",
    ];

    // State
    this.state = {
      rows: props.rows ? this.rows[parseInt(props.rows) - 1] : "",
      cols: props.cols
        ? this.columns[parseInt(props.cols) - 1]
        : this.columns[11],
    };
  }

  render() {
    return (
      <div
        className={`grid ${this.state.rows} ${this.state.cols} mb-8 gap-4 ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

export class Column extends Component {
  constructor(props) {
    super(props);

    // Column spans
    this.colSpans = [
      "lg:col-span-1",
      "lg:col-span-2",
      "lg:col-span-3",
      "lg:col-span-4",
      "lg:col-span-5",
      "lg:col-span-6",
      "lg:col-span-7",
      "lg:col-span-8",
      "lg:col-span-9",
      "lg:col-span-10",
      "lg:col-span-11",
      "lg:col-span-12",
    ];

    // State
    this.state = {
      span: props.span
        ? this.colSpans[parseInt(props.span - 1)]
        : this.colSpans[0],
    };
  }

  render() {
    return (
      <div
        className={`${this.state.span} col-span-12 ${
          this.props.className || ""
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

export class Code extends Component {
  render() {
    return (
      <code
        className={`block whitespace-pre rounded-lg border bg-slate-900 p-4 shadow-sm ${
          this.props.className || ""
        }`}
      >
        <pre>{this.props.children}</pre>
      </code>
    );
  }
}
