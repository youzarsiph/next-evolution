import Link from "next/link";
import urls from "../../../urls";
import { BaseNavbar } from "../..";
import { Component } from "react";
import { Column, Grid } from "../../../components/utils";
import {
  Navbar,
  NavbarBrand,
  NavbarContainer,
  NavbarMenu,
  MenuToggler,
  MenuItem,
  Pagination,
  PaginationItem,
} from "../../../components/navigation";
import { Badge } from "../../../components/view";

export class View extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      prevPage: props.prevPage ? props.prevPage : "#",
      nextPage: props.nextPage ? props.nextPage : "#",
    };
  }

  render() {
    const links = [
      // Contents
      {
        label: "Contents",
        link: urls["contents"],
        heading: true,
        new: false,
        updated: false,
      },
      {
        label: "Typography",
        link: urls["typography"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Images",
        link: urls["images"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Tables",
        link: urls["tables"],
        heading: false,
        new: false,
        updated: false,
      },
      // Forms
      {
        label: "Forms",
        link: urls["forms"],
        heading: true,
        new: false,
        updated: false,
      },
      {
        label: "Overview",
        link: urls["overview"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Floating",
        link: urls["floating"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Flushed",
        link: urls["flushed"],
        heading: false,
        new: false,
        updated: false,
      },
      // Components
      {
        label: "Components",
        link: urls["component"],
        heading: true,
        new: false,
        updated: false,
      },
      {
        label: "Accordions",
        link: urls["accordion"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Alerts",
        link: urls["alert"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Avatars",
        link: urls["avatar"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Badges",
        link: urls["badge"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Breadcrumbs",
        link: urls["breadcrumb"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Buttons",
        link: urls["button"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Cards",
        link: urls["card"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Navbar",
        link: urls["navbar"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Pagination",
        link: urls["pagination"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Skeletons",
        link: urls["skeleton"],
        heading: false,
        new: false,
        updated: false,
      },
      {
        label: "Spinners",
        link: urls["spinner"],
        heading: false,
        new: false,
        updated: false,
      },
    ];

    const newState = (
      <span className={"ml-4"}>
        <Badge color="success">New</Badge>
      </span>
    );

    const updatedState = (
      <span className={"ml-4"}>
        <Badge color="secondary">Updated</Badge>
      </span>
    );

    return (
      <div className={"lg:h-screen lg:overflow-hidden"}>
        <BaseNavbar className={"border-b"} />

        <Grid>
          <Column span="3">
            <div className={"lg:h-screen--5rem lg:overflow-y-auto lg:border-r"}>
              <Navbar id="sidebar" className={"navbar-vertical"}>
                <NavbarContainer>
                  <NavbarBrand href={urls["docs"]} className={"lg:hidden"}>
                    Docs
                  </NavbarBrand>
                  <MenuToggler id="sidebarToggler" menuID="sidebarMenu" />
                </NavbarContainer>

                <NavbarMenu id="sidebarMenu">
                  <li
                    className={`navbar-menu-item navbar-menu-heading lg:hidden`}
                  >
                    <span
                      className={
                        "navbar-brand flex w-full items-center justify-between"
                      }
                    >
                      <Link href={"/"}>Docs</Link>
                      <button type="button" className={"inline-block h-8 w-8"}>
                        <label
                          htmlFor="sidebarMenu"
                          className={"navbar-toggle-icon show"}
                        ></label>
                      </button>
                    </span>
                  </li>
                  {links.map((item) => {
                    return (
                      <MenuItem key={item["label"]} heading={item["heading"]}>
                        <Link href={item["link"]}>{item["label"]}</Link>
                        {item["updated"] ? updatedState : ""}
                        {item["new"] ? newState : ""}
                      </MenuItem>
                    );
                  })}
                </NavbarMenu>
              </Navbar>
            </div>
          </Column>

          <Column span="9">
            <div
              className={
                "lg:h-screen--5rem overflow-y-auto p-4 lg:px-8 lg:pr-12"
              }
            >
              {this.props.children}

              <Pagination className={"justify-end"}>
                <PaginationItem>
                  <span className={"mr-4 inline-block"}>«</span>
                  <Link href={this.state.prevPage}>Prev</Link>
                </PaginationItem>
                <PaginationItem>
                  <Link href={this.state.nextPage}>Next</Link>
                  <span className={"ml-4 inline-block"}> »</span>
                </PaginationItem>
              </Pagination>
            </div>
          </Column>
        </Grid>
      </div>
    );
  }
}

export let colors = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "danger",
  "light",
  "dark",
];

export const sizes = ["lg", "md", "sm"];

export default function Components() {
  return (
    <View prevPage={urls["flushed"]} nextPage={urls["accordion"]}>
      <section title="Components">
        <h1 className={"text-gradient gradient-primary"}>
          Compone
          <wbr />
          nts
        </h1>
        <p className={"text-xl font-light"}>
          Components are the building blocks of a react application. In this
          section and the following sections we are going to learn about
          components in Evolution UI
        </p>
      </section>
    </View>
  );
}
