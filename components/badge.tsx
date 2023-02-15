import Props from "./index";
import React from "react";
import styles from "../styles/components/Badge.module.css";

interface BadgeProps extends Props {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | string;
  pill?: boolean;
  outline?: boolean;
}

export class Badge extends React.Component<BadgeProps> {
  private style: string = styles.badge;

  constructor(props: BadgeProps) {
    super(props);

    if (props.pill) {
      this.style += ` ${styles.pill}`;
    }

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
  }

  render(): React.ReactNode {
    return (
      <span role={"status"} className={this.style}>
        {this.props.children}
      </span>
    );
  }
}
