import React from "react";
import Props from "./index";
import styles from "../styles/components/Spinner.module.css";

interface SpinnerProps extends Props {
  color:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | string;
  type?: "filled" | "circle" | "border";
  gradient?: boolean;
}

export class Spinner extends React.Component<SpinnerProps> {
  private style: string = styles.spinner;

  constructor(props: SpinnerProps) {
    super(props);

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

    switch (props.type) {
      case "filled":
        this.style += ` ${styles.filled}`;
        break;

      case "circle":
        this.style += ` ${styles.circle}`;
        break;

      default:
        this.style += ` ${styles.bordered}`;
        break;
    }

    if (props.gradient) {
      this.style += ` ${styles.gradient}`;
    }
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <span role={"status"} title={"Loading"} className={this.style}>
          {this.props.gradient ? (
            <span className={styles.innerCircle} />
          ) : undefined}
        </span>
      </div>
    );
  }
}
