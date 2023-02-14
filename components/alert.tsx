import React from "react";
import Props from "./index";
import styles from "../styles/components/Alert.module.css";

interface AlertProps extends Props {
  color:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark";
  modern?: boolean;
  flushed?: boolean;
}

export class Alert extends React.Component<AlertProps> {
  private style: string = styles.alert;

  constructor(props: AlertProps) {
    super(props);

    if (props.flushed) {
      this.style += ` ${styles.flushed}`;
    }

    if (props.modern) {
      this.style += ` ${styles.modern}`;
    }

    switch (props.color) {
      case "primary":
        this.style += ` ${styles.primary}`;
        break;

      case "secondary":
        this.style += ` ${styles.secondary}`;
        break;

      case "info":
        this.style += ` ${styles.info}`;
        break;

      case "success":
        this.style += ` ${styles.success}`;
        break;

      case "warning":
        this.style += ` ${styles.warning}`;
        break;

      case "danger":
        this.style += ` ${styles.danger}`;
        break;

      case "light":
        this.style += ` ${styles.light}`;
        break;

      case "dark":
        this.style += ` ${styles.dark}`;
        break;

      default:
        this.style += ` ${styles.primary}`;
        break;
    }
  }

  render(): React.ReactNode {
    return (
      <div role={"alert"} className={this.style}>
        {this.props.children}
      </div>
    );
  }
}
