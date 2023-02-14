import React from "react";
import Props from "./index";
import styles from "../styles/components/Button.module.css";

interface ButtonProps extends Props {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark";
  pill?: boolean;
  outline?: boolean;
  gradient?: boolean;
  size?: "sm" | "lg";
  type?: "button" | "submit" | "reset";
}

export class Button extends React.Component<ButtonProps> {
  private style: string = styles.btn;
  private bgStyle: string = styles.bg;
  private type: "button" | "submit" | "reset";

  constructor(props: ButtonProps) {
    super(props);

    if (props.outline) {
      switch (props.color) {
        case "primary":
          this.style += ` ${styles.outlinePrimary}`;
          break;

        case "secondary":
          this.style += ` ${styles.outlineSecondary}`;
          break;

        case "info":
          this.style += ` ${styles.outlineInfo}`;
          break;

        case "success":
          this.style += ` ${styles.outlineSuccess}`;
          break;

        case "warning":
          this.style += ` ${styles.outlineWarning}`;
          break;

        case "danger":
          this.style += ` ${styles.outlineDanger}`;
          break;

        case "light":
          this.style += ` ${styles.outlineLight}`;
          break;

        case "dark":
          this.style += ` ${styles.outlineDark}`;
          break;

        default:
          this.style += ` ${styles.outlinePrimary}`;
          break;
      }
    } else {
      switch (props.color) {
        case "primary":
          this.style += ` ${styles.primary}`;
          this.bgStyle += ` ${styles.primary}`;
          break;

        case "secondary":
          this.style += ` ${styles.secondary}`;
          this.bgStyle += ` ${styles.secondary}`;
          break;

        case "info":
          this.style += ` ${styles.info}`;
          this.bgStyle += ` ${styles.info}`;
          break;

        case "success":
          this.style += ` ${styles.success}`;
          this.bgStyle += ` ${styles.success}`;
          break;

        case "warning":
          this.style += ` ${styles.warning}`;
          this.bgStyle += ` ${styles.warning}`;
          break;

        case "danger":
          this.style += ` ${styles.danger}`;
          this.bgStyle += ` ${styles.danger}`;
          break;

        case "light":
          this.style += ` ${styles.light}`;
          this.bgStyle += ` ${styles.light}`;
          break;

        case "dark":
          this.style += ` ${styles.dark}`;
          this.bgStyle += ` ${styles.dark}`;
          break;

        default:
          // The default case
          this.style += ` ${styles.primary}`;
          this.bgStyle += ` ${styles.primary}`;
          break;
      }
    }

    if (props.gradient) {
      this.style += ` ${styles.gradient}`;
    }

    if (props.pill) {
      this.style += ` ${styles.pill}`;
    }

    switch (props.size) {
      case "sm":
        this.style += ` ${styles.sm}`;
        break;

      case "lg":
        this.style += ` ${styles.lg}`;
        break;

      default:
        break;
    }

    switch (props.type) {
      case "submit":
        this.type = "submit";
        break;

      case "reset":
        this.type = "reset";
        break;

      default:
        this.type = "button";
        break;
    }
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        {this.props.gradient && <div className={this.bgStyle}></div>}
        <button type={this.type} className={this.style}>
          {this.props.children}
        </button>
      </div>
    );
  }
}
