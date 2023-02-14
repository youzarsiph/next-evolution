import Props from "./index";
import React from "react";
import styles from "../styles/components/Breadcrumb.module.css";

interface BreadcrumbProps extends Props {}

export class Breadcrumb extends React.Component<BreadcrumbProps> {
  render(): React.ReactNode {
    return (
      <nav role={"navigation"} className={styles.container}>
        <ol className={styles.breadcrumb}>{this.props.children}</ol>
      </nav>
    );
  }
}

export class BreadcrumbItem extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <>
        <li>{this.props.children}</li>
        <li role={"presentation"} className={styles.item}>
          »
        </li>
      </>
    );
  }
}
