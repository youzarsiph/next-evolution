import { Component } from "react";

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="mx-4 p-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96">
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
    render() {
      return (
        <div className="grid gap-4 mb-4">
          {this.props.children}
        </div>
      );
    }
  }
  