import React from "react";
import Props from "./index";
import styles from "../styles/components/Navbar.module.css";

interface NavbarProps extends Props {
  fixed?: boolean;
  sidebar?: boolean;
  brand?: string | React.ReactNode | React.ReactNode[];
}

interface NavbarState {
  open?: boolean;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);

    // Bind toggleMenu
    this.toggleMenu = this.toggleMenu.bind(this);

    // State
    this.state = {
      open: false,
    };
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render(): React.ReactNode {
    return (
      <header className={this.props.fixed ? styles.fixedTop : undefined}>
        <nav className={this.props.sidebar ? styles.sidebar : styles.navbar}>
          <div className={styles.container}>
            <div className="flex w-full items-center justify-between lg:w-auto">
              <span className={styles.brand}>{this.props.brand}</span>
              <button
                type="button"
                className={styles.toggler}
                onClick={this.toggleMenu}
              >
                {this.state.open ? (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8h16M4 16h16"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
            <ul
              className={`${styles.menu} ${this.state.open ? styles.open : ""}`}
            >
              {this.props.children}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export class NavItem extends React.Component<Props> {
  render(): React.ReactNode {
    return <li className={styles.item}>{this.props.children}</li>;
  }
}
