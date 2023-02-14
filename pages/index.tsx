import urls from "../urls";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Button } from "../components/button";
import { Card, CardBody } from "../components/card";
import { Navbar, NavItem } from "../components/navbar";
import { Container } from "../components/utils";

export function BaseNavbar(props: { fixed?: boolean }) {
  return (
    <Navbar id="navbar" fixed={props.fixed} brand="Evolution UI">
      <NavItem>
        <Link href={urls["home"]}>Home</Link>
      </NavItem>
      <NavItem>
        <Link href={urls["docs"]}>Docs</Link>
      </NavItem>
      <NavItem>
        <Link href={urls["component"]}>Components</Link>
      </NavItem>
      <NavItem>
        <a href={urls["github"]}>Github</a>
      </NavItem>
    </Navbar>
  );
}

export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Head>
          <title>NextEvolution, Evolution UI in Next.js</title>
          <meta name="description" content="React Component Library" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <BaseNavbar fixed />

        <header className="bg-gradient gradient-info mb-16 text-white shadow-lg">
          <Container>
            <div className="mt-16 py-24">
              <h1 className="font-extrabold tracking-tight text-white lg:text-9xl">
                Next Evolution
              </h1>

              <h3 className="text-white">Evolution of the UI</h3>

              <p className="text-xl font-light">
                Evolution UI is an open source React component library for
                building elegant user interfaces.
              </p>
            </div>
          </Container>
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
                <Button color="info" gradient>
                  <a href={urls["github"]}>Learn more</a>
                </Button>
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
                <Button color="danger" gradient>
                  <Link href={urls["component"]}>Components</Link>
                </Button>
              </CardBody>
            </Card>
          </div>
        </Container>

        <footer className="bg-gradient gradient-danger mt-16 text-white shadow-2xl">
          <Container>
            <div className="py-24">
              <h1 className="font-bold tracking-tight text-white">
                Next Evolution
              </h1>
              <h3 className="text-white">
                Open Source React Component Library
              </h3>

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
          </Container>
        </footer>
      </>
    );
  }
}
