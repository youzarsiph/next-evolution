import React from "react";
import Props from "./index";
import styles from "../styles/components/Accordion.module.css";

interface AccordionProps extends Props {
  flushed?: boolean;
}

export class Accordion extends React.Component<AccordionProps> {
  private style: string = styles.accordion;

  constructor(props: AccordionProps) {
    super(props);

    if (props.flushed) {
      this.style += ` ${styles.flushed}`;
    }
  }

  render(): React.ReactNode {
    return (
      <section>
        <ol className={this.style}>{this.props.children}</ol>
      </section>
    );
  }
}

interface ItemProps extends Props {
  label: string;
}

interface ItemState {
  collapsed: boolean;
}

export class AccordionItem extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps) {
    super(props);

    // Binding methods
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);

    // State
    this.state = {
      collapsed: true,
    };
  }

  onChange() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  onClick() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render(): React.ReactNode {
    return (
      <li className={styles.item}>
        <div className={styles.container}>
          <button type={"button"} onClick={this.onClick} className={styles.btn}>
            {this.props.label}
            <span>
              {this.state.collapsed ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>

        {!this.state.collapsed && (
          <div className={styles.content}>{this.props.children}</div>
        )}
      </li>
    );
  }
}
