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

export class View extends Component {
  constructor(props) {
    super(props);
    this.prevPage = props.prevPage ? props.prevPage : "#";
    this.nextPage = props.nextPage ? props.nextPage : "#";
  }

  render() {
    return (
      <div className="lg:overflow-hidden lg:h-screen">
        <BaseNavbar bordered />

        <Grid>
          <Column span="3">
            <div className="lg:h-screen-4rem lg:overflow-y-auto lg:border-r">
              <Navbar id="sidebar" vertical>
                <NavbarContainer>
                  <NavbarBrand href={urls["docs"]}>Docs</NavbarBrand>
                  <MenuToggler id="sidebarToggler" menuID="sidebarMenu" />
                </NavbarContainer>

                <NavbarMenu id="sidebarMenu">
                  <MenuItem heading>Contents</MenuItem>
                  <MenuItem>
                    <Link href={urls["typography"]}>Typography</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["images"]}>Images</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["tables"]}>Tables</Link>
                  </MenuItem>

                  <MenuItem heading>Forms</MenuItem>
                  <MenuItem>
                    <Link href={urls["overview"]}>Overview</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["floating"]}>Floating</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["flushed"]}>Flushed</Link>
                  </MenuItem>

                  <MenuItem heading>Components</MenuItem>
                  <MenuItem>
                    <Link href={urls["accordions"]}>Accordions</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["alerts"]}>Alerts</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["avatars"]}>Avatars</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["badges"]}>Badges</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["breadcrumbs"]}>Breadcrumbs</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["buttons"]}>Buttons</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["cards"]}>Cards</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["navbars"]}>Navbars</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["paginations"]}>Paginations</Link>
                  </MenuItem>
                </NavbarMenu>
              </Navbar>
            </div>
          </Column>

          <Column span="9">
            <div className="lg:h-screen-4rem overflow-y-auto p-4 lg:px-8 lg:pr-12">
              {this.props.children}

              <Pagination justify="end">
                <PaginationItem>
                  <span className="inline-block mr-4">«</span>
                  <Link href={this.prevPage}>Prev</Link>
                </PaginationItem>
                <PaginationItem>
                  <Link href={this.nextPage}>Next</Link>
                  <span className="inline-block ml-4"> »</span>
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

export let sizes = ["lg", "md", "sm"];

export default function Components() {
  return (
    <View prevPage={urls["flushed"]} nextPage={urls["alerts"]}>
      <section title="Components">
        <h1 className="text-gradient gradient-primary">
          Compone
          <wbr />
          nts
        </h1>
        <p className="text-xl font-light">
          Components are the building blocks of a react application. In this
          section and the following sections we are going to learn about
          components in Evolution UI
        </p>
      </section>
    </View>
  );
}
