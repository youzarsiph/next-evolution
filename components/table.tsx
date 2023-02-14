import Props from ".";
import React from "react";
import styles from "../styles/components/Table.module.css";

export class Table extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <section className={styles.container}>
        <table>{this.props.children}</table>
      </section>
    );
  }
}

export class TableHeader extends React.Component<Props> {
  render(): React.ReactNode {
    return <thead>{this.props.children}</thead>;
  }
}

interface TableCellProps extends Props {
  span?: number;
  scope?: string;
}

export class TableHeaderCell extends React.Component<TableCellProps> {
  render(): React.ReactNode {
    return (
      <th scope={this.props.scope} colSpan={this.props.span}>
        {this.props.children}
      </th>
    );
  }
}

export class TableBody extends React.Component<Props> {
  render(): React.ReactNode {
    return <tbody>{this.props.children}</tbody>;
  }
}

export class TableRow extends React.Component<Props> {
  render(): React.ReactNode {
    return <tr>{this.props.children}</tr>;
  }
}

export class TableCell extends React.Component<TableCellProps> {
  render(): React.ReactNode {
    return (
      <td scope={this.props.scope} colSpan={this.props.span}>
        {this.props.children}
      </td>
    );
  }
}

export class TableFooter extends React.Component<Props> {
  render(): React.ReactNode {
    return <tfoot>{this.props.children}</tfoot>;
  }
}
