import Props from "./index";
import React from "react";
import styles from "../styles/components/Avatar.module.css";

interface AvatarProps extends Props {
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
  size?: "sm" | "lg" | string;
  gradient?: boolean;
}

export class Avatar extends React.Component<AvatarProps> {
  private style: string = styles.avatar;

  constructor(props: AvatarProps) {
    super(props);

    if (props.gradient) {
      this.style += ` ${styles.gradient}`;
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
    return <span className={this.style}>{this.props.children}</span>;
  }
}
