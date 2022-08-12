import Head from "next/head";
import { Component } from "react";
import { Container, Flex, Grid } from "../components/utils";
import { InlineInput, Input, Select, Switch } from "../components/forms";
import {
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../components/view";
import Link from "next/link";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.colors = [
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "danger",
      "light",
      "dark",
    ];
  }

  render() {
    return (
      <Container>
        <Head>
          <title>NextEvolution, Evolution UI in Next.js</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="mb-8">
          <h1 className="text-gradient text-gradient-info lg:text-9xl">
            Next Evolution
          </h1>

          <h2 className="text-gradient text-gradient-light">
            Evolution of the UI
          </h2>

          <p className="text-xl text-left">
            Evolution UI is a React component library for building elegant user
            interfaces. Next Evolution is a version of{" "}
            <abbr title="Evolution UI">EUI</abbr> that implemented to be used
            with Next.js
          </p>
        </header>

        <section className="mb-8" title="Contents">
          <h2 className="text-gradient text-gradient-info">Contents</h2>

          <article className="mb-4" title="typography" id="typography">
            <h3>Typography</h3>

            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>

            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <u>Underlined text.</u>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>

            <blockquote className="mb-4">
              <p className="italic">
                A well-known quote, contained in a blockquote element.
              </p>
              <footer>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>

            <ul className="mb-4">
              <li>This is an unorderd list.</li>
              <li>
                Nested lists:
                <ul>
                  <li>The 1st item</li>
                  <li>...</li>
                  <li>The nth item</li>
                </ul>
              </li>
              <li>The last item in the list</li>
            </ul>

            <ol>
              <li>This is an orderd list.</li>
              <li>
                Nested lists:
                <ul>
                  <li>The 1st item</li>
                  <li>...</li>
                  <li>The nth item</li>
                </ul>
              </li>
              <li>The last item in the list</li>
            </ol>
          </article>

          <article className="mb-4" title="Images" id="images">
            <h3>Images &amp; Figures</h3>
            <div className="grid lg:grid-cols-2 gap-4">
              <figure className="relative">
                <img
                  src="/curved-6.jpg"
                  alt="Curved Image"
                  className="rounded-lg"
                />
                <figcaption>This text explains the figure</figcaption>
              </figure>

              <figure>
                <img
                  src="/curved-11.jpg"
                  alt="Curved Image"
                  className="rounded-lg"
                />
                <figcaption>A short description of the image</figcaption>
              </figure>
            </div>
          </article>

          <article className="mb-4" title="Tables" id="tables">
            <h3>Tables</h3>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell scope="col" headerCell>
                    #
                  </TableCell>
                  <TableCell scope="col" headerCell>
                    First
                  </TableCell>
                  <TableCell scope="col" headerCell>
                    Last
                  </TableCell>
                  <TableCell scope="col" headerCell>
                    Handle
                  </TableCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow>
                  <TableCell scope="row" headerCell>
                    1
                  </TableCell>
                  <TableCell>Yousef</TableCell>
                  <TableCell>Abu Shanab</TableCell>
                  <TableCell>@youzarsiph</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row" headerCell>
                    2
                  </TableCell>
                  <TableCell>Arthur</TableCell>
                  <TableCell>Morgan</TableCell>
                  <TableCell>@argan</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row" headerCell>
                    3
                  </TableCell>
                  <TableCell colSpan="2">John Marston</TableCell>
                  <TableCell>@marston</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </article>
        </section>

        <section className="mb-8" title="Forms and Inputs">
          <h2 className="text-gradient text-gradient-info">Forms</h2>

          <article className="mb-8" title="Basic inputs">
            <h3>Basic</h3>

            <Input
              id="email"
              label="Email address"
              type="email"
              name="email"
              helpText="We'll never share your email with anyone else."
            />
            <Input
              id="password"
              type="password"
              name="password"
              label="Password"
            />
            <InlineInput
              id="check"
              name="check"
              type="checkbox"
              label="Check me out"
            />

            <h4>Radio buttons</h4>

            <InlineInput
              id="radio1"
              type="radio"
              name="radio"
              label="Default radio"
            />
            <InlineInput
              id="radio2"
              type="radio"
              name="radio"
              label="Another radio"
            />

            <Select id="country" label="Select input" placeholder="Country">
              <option value="0">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Select>

            <Input id="upload" type="file" name="upload" label="Upload" />

            <Switch id="x" label="Switch checkbox input" name="x" />

            <Button type="submit" color="primary">
              Submit
            </Button>
          </article>

          <article className="mb-8" title="Floating lables">
            <h3>Floating labels</h3>

            <Input
              id="email1"
              label="Email"
              type="email"
              name="email"
              placeholder="Email Address"
              floating
            />
            <Input
              id="password1"
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              floating
            />
          </article>

          <article title="Flushed inputs">
            <h3>Flushed</h3>

            <Input
              id="email2"
              label="Email"
              type="email"
              name="email"
              placeholder="Email Address"
              flushed
              floating
            />
            <Input
              id="password2"
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              flushed
              floating
            />
          </article>
        </section>

        <section className="mb-8" title="Components">
          <h2 className="text-gradient text-gradient-info">Components</h2>

          <article className="mb-8" title="Alerts">
            <h3>Alerts</h3>

            <h4 className="text-2xl">Basic</h4>
            <div className="grid gap-4 mb-4">
              {this.colors.map((item) => {
                return (
                  <Alert key={item} color={item}>
                    This is the {item} alert without a link!
                  </Alert>
                );
              })}
            </div>

            <h4>Flushed</h4>
            <div className="mb-4">
              <Alert color="info" flushed>
                This is a flushed alert without a link!
              </Alert>
            </div>

            <h4>Modern</h4>
            <Alert color="info" modern>
              <Badge color="info" pill>
                New
              </Badge>
              This is a modern alert with a badge component!
            </Alert>
          </article>

          <article className="mb-8" title="Badges">
            <h3>Badges</h3>

            <h4>Basic</h4>

            <Flex>
              {this.colors.map((item) => {
                return (
                  <Badge key={item} color={item}>
                    {item}
                  </Badge>
                );
              })}
            </Flex>

            <h4>Outline</h4>

            <Flex>
              {this.colors.map((item) => {
                return (
                  <Badge key={item} color={item} outline>
                    {item}
                  </Badge>
                );
              })}
            </Flex>
          </article>

          <article className="mb-8" title="Breadcrumbs">
            <h3>Breadcrumbs</h3>

            <Breadcrumb>
              <BreadcrumbItem>
                <Link href={"#"}>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href={"#"}>Docs</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href={"#"}>Components</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href={"#"}>Breadcrumbs</Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </article>

          <article className="mb-8" title="Buttons">
            <h3>Buttons</h3>

            <h4>Basic</h4>

            <Flex>
              {this.colors.map((item) => {
                return (
                  <Button key={item} color={item}>
                    {item}
                  </Button>
                );
              })}
            </Flex>

            <h4>Outline</h4>

            <Flex>
              {this.colors.map((item) => {
                return (
                  <Button key={item} color={item} outline>
                    {item}
                  </Button>
                );
              })}
            </Flex>
          </article>

          <article className="mb-8" title="Cards">
            <h3>Cards</h3>

            <h4>Basic</h4>

            <Grid>
              <Card>
                <CardBody>
                  <h3 className="text-gradient text-gradient-primary">
                    Next Evolution
                  </h3>
                  <h4 className="font-light">Evolution UI in Next.js</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem veniam suscipit sed autem animi culpa dolores
                    voluptatibus dolore, fuga beatae eaque. Laudantium expedita
                    earum itaque animi voluptatibus enim quasi explicabo.
                  </p>
                  <Button color="primary">Read more...</Button>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h3 className="text-gradient text-gradient-info">
                    The Evolution of the UI
                  </h3>
                  <h4 className="font-light">Build modern UIs in no time</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati quos, minima, earum error culpa eius repudiandae
                    aspernatur tempore id quis voluptates inventore ullam.
                    Laborum voluptates nihil saepe.
                  </p>
                </CardBody>
              </Card>

              <Card>
                <img
                  src="/curved-6.jpg"
                  alt="An image with no description"
                  className="rounded-t-lg object-cover"
                />
                <CardBody>
                  <h3 className="text-gradient text-gradient-success">
                    Evolution in the UI
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Odit culpa ea, aliquid ad excepturi fugit asperiores a
                    impedit debitis, obcaecati error eligendi amet fuga sed
                    veritatis recusandae suscipit iure nisi.
                  </p>
                </CardBody>
              </Card>

              <Card>
                <div className="px-3 pt-3">
                  <img
                    src="/curved-10.jpg"
                    alt="An image with no description"
                    className="rounded-lg object-cover"
                  />
                </div>
                <CardBody>
                  <h3 className="text-gradient text-gradient-warning">
                    UI Evoloved
                  </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus rem eligendi provident dolores, ad quis
                    blanditiis ex vel consectetur est beatae? In porro error
                    optio id pariatur voluptas cumque iure?
                  </p>
                </CardBody>
              </Card>
            </Grid>
          </article>
        </section>
      </Container>
    );
  }
}
