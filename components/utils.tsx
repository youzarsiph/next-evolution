import Props from ".";
import React from "react";
import styles from "../styles/components/Utils.module.css";

export class Container extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <section className={styles.container}>{this.props.children}</section>
    );
  }
}

export class Flex extends React.Component<Props> {
  render(): React.ReactNode {
    return <div className={styles.flexContainer}>{this.props.children}</div>;
  }
}

interface GridProps extends Props {
  cols: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export class Grid extends React.Component<GridProps> {
  private style: string = styles.gridContainer;

  constructor(props: GridProps) {
    super(props);

    // Style
    switch (props.cols) {
      case 1:
        this.style += ` ${styles.cols1}`;
        break;

      case 2:
        this.style += ` ${styles.cols2}`;
        break;

      case 3:
        this.style += ` ${styles.cols3}`;
        break;

      case 4:
        this.style += ` ${styles.cols4}`;
        break;

      case 5:
        this.style += ` ${styles.cols5}`;
        break;

      case 6:
        this.style += ` ${styles.cols6}`;
        break;

      case 7:
        this.style += ` ${styles.cols7}`;
        break;

      case 8:
        this.style += ` ${styles.cols8}`;
        break;

      case 9:
        this.style += ` ${styles.cols9}`;
        break;

      case 10:
        this.style += ` ${styles.cols10}`;
        break;

      case 11:
        this.style += ` ${styles.cols11}`;
        break;

      default:
        this.style += ` ${styles.cols12}`;
        break;
    }
  }

  render(): React.ReactNode {
    return <div className={this.style}>{this.props.children}</div>;
  }
}

interface ColumnProps extends Props {
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export class Column extends React.Component<ColumnProps> {
  private style: string = "col-span-12";

  constructor(props: ColumnProps) {
    super(props);

    // Style
    switch (props.span) {
      case 1:
        this.style += ` ${styles.span1}`;
        break;

      case 2:
        this.style += ` ${styles.span2}`;
        break;

      case 3:
        this.style += ` ${styles.span3}`;
        break;

      case 4:
        this.style += ` ${styles.span4}`;
        break;

      case 5:
        this.style += ` ${styles.span5}`;
        break;

      case 6:
        this.style += ` ${styles.span6}`;
        break;

      case 7:
        this.style += ` ${styles.span7}`;
        break;

      case 8:
        this.style += ` ${styles.span8}`;
        break;

      case 9:
        this.style += ` ${styles.span9}`;
        break;

      case 10:
        this.style += ` ${styles.span10}`;
        break;

      case 11:
        this.style += ` ${styles.span11}`;
        break;

      default:
        this.style += ` ${styles.span12}`;
        break;
    }
  }

  render(): React.ReactNode {
    return <section className={this.style}>{this.props.children}</section>;
  }
}

export class Code extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <code>
        <pre>{this.props.children}</pre>
      </code>
    );
  }
}
