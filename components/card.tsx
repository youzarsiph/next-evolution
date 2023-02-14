import Props from "./index";
import React from "react";
import styles from "../styles/components/Card.module.css";

export class Card extends React.Component<Props> {
  render(): React.ReactNode {
    return <article className={styles.card}>{this.props.children}</article>;
  }
}

export class CardHeader extends React.Component<Props> {
  render(): React.ReactNode {
    return <header className={styles.header}>{this.props.children}</header>;
  }
}

export class CardBody extends React.Component<Props> {
  render(): React.ReactNode {
    return <main className={styles.body}>{this.props.children}</main>;
  }
}

export class CardFooter extends React.Component<Props> {
  render(): React.ReactNode {
    return <footer className={styles.footer}>{this.props.children}</footer>;
  }
}
