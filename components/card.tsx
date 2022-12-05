import { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div className={`card ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class CardHeader extends Component {
  render() {
    return (
      <header className={`card-header ${this.props.className || ""}`}>
        {this.props.children}
      </header>
    );
  }
}

export class CardBody extends Component {
  render() {
    return (
      <div className={`card-body ${this.props.className || ""}`}>
        {this.props.children}
      </div>
    );
  }
}

export class CardFooter extends Component {
  render() {
    return (
      <footer className={`card-footer ${this.props.className || ""}`}>
        {this.props.children}
      </footer>
    );
  }
}
