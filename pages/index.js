import urls from "../urls";
import Link from "next/link";
import Head from "next/head";
import { Component } from "react";
import {
  Navbar,
  MenuItem,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  MenuToggler,
} from "../components/navigation";
import { Container } from "../components/utils";
import { Card, CardBody } from "../components/view";

export function BaseNavbar(props) {
  return (
    <Navbar id="navbar" className={props.className}>
      <NavbarContainer>
        <NavbarBrand href={urls["home"]}>Evolution UI</NavbarBrand>
        <MenuToggler id="toggler" menuID="navMenu" />
      </NavbarContainer>

      <NavbarMenu id="navMenu">
        <li className={`navbar-menu-item navbar-menu-heading lg:hidden`}>
          <span className="navbar-brand flex w-full items-center justify-between">
            <Link href={"/"}>EvolutionUI</Link>
            <button type="button" className="inline-block h-8 w-8">
              <label
                htmlFor="navMenu"
                className="navbar-toggle-icon show"
              ></label>
            </button>
          </span>
        </li>
        <MenuItem>
          <Link href={urls["home"]}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href={urls["docs"]}>Docs</Link>
        </MenuItem>
        <MenuItem>
          <Link href={urls["component"]}>Components</Link>
        </MenuItem>
        <MenuItem>
          <a href={urls["github"]}>Github</a>
        </MenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <title>NextEvolution, Evolution UI in Next.js</title>
          <meta name="description" content="React Component Library" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <BaseNavbar />

        <header className="bg-gradient gradient-info text-white shadow-lg">
          <div className="container mb-16 py-24">
            <h1 className="font-extrabold tracking-tight text-white lg:text-9xl">
              Next Evolution
            </h1>

            <h3 className="text-white">Evolution of the UI</h3>

            <p className="text-xl font-light">
              Evolution UI is an open source React component library for
              building elegant user interfaces.
            </p>
          </div>
        </header>

        <Container>
          <h1 className="text-gradient gradient-primary font-extrabold tracking-tight">
            Features
          </h1>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardBody>
                <h3 className="font-extrabold tracking-tight">
                  Open Source & Free
                </h3>
                <p className="mb-4">
                  Next Evolution is an open source project hosted on Github
                </p>
                <div className="relative inline-block">
                  <div className="bg-gradient gradient-info absolute -inset-1 animate-pulse rounded-lg blur"></div>
                  <a
                    href={urls["github"]}
                    className="btn btn-info bg-gradient gradient-info hover:text-white hover:no-underline active:text-white"
                  >
                    Learn more
                  </a>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <h3 className="font-extrabold tracking-tight">
                  Beautiful & Elegant
                </h3>
                <p>
                  Beautiful by default and Responsive. Do more with less code
                </p>
                <div className="relative inline-block">
                  <div className="bg-gradient gradient-danger absolute -inset-1 animate-pulse rounded-lg blur"></div>
                  <a
                    href={urls["component"]}
                    className="btn btn-danger bg-gradient gradient-danger hover:text-white hover:no-underline active:text-white"
                  >
                    Components
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </Container>

        <footer className="bg-gradient gradient-success text-white shadow-2xl">
          <div className="container mt-16 py-24">
            <h1 className="font-bold tracking-tight text-white">
              Next Evolution
            </h1>
            <h3 className="text-white">Open Source React Component Library</h3>

            <p className="text-xl text-white">
              Made with love by{" "}
              <a
                href="https://github.com/youzarsiph"
                className="text-white hover:text-white"
              >
                Yousef Abu Shanab
              </a>
            </p>
          </div>
        </footer>
      </>
    );
  }
}
