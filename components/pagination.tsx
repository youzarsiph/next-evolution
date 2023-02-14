import React from "react";
import Props from "./index";
import styles from "../styles/components/Pagination.module.css";

export class Pagination extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <section>
        <nav className={"my-4"}>
          <ol className={styles.container}>{this.props.children}</ol>
        </nav>
      </section>
    );
  }
}

export class PaginationItem extends React.Component<Props> {
  render(): React.ReactNode {
    return <li className={styles.item}>{this.props.children}</li>;
  }
}
