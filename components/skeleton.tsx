import React from "react";
import Props from "./index";
import styles from "../styles/components/Skeleton.module.css";

interface SkeletonProps extends Props {
  width?: string;
  type?: "text" | "circle";
}

export class Skeleton extends React.Component<SkeletonProps> {
  private style: string = styles.container;

  constructor(props: SkeletonProps) {
    super(props);

    switch (props.type) {
      case "text":
        this.style += ` ${styles.text}`;
        break;

      case "circle":
        this.style += ` ${styles.circle}`;
        break;

      default:
        break;
    }
  }

  render(): React.ReactNode {
    return (
      <span
        role={"status"}
        title={"Loading"}
        className={this.style}
        style={{ width: this.props.width }}
      />
    );
  }
}
