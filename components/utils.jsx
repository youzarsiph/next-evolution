import { Component } from "react";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container">
        {this.props.children}
      </section>
    );
  }
}

export class Flex extends Component {
  render() {
    return (
      <div className="flex flex-wrap items-center gap-4 mb-4">
        {this.props.children}
      </div>
    );
  }
}

export class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`grid lg:grid-cols-2 gap-4 mb-4`}>
        {this.props.children}
      </div>
    );
  }
}
