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
    this.prevPage = props.prevPage ? props.prevPage : "#";
    this.nextPage = props.nextPage ? props.nextPage : "#";
  }

  render() {
    return (
      <div className="lg:h-screen lg:overflow-hidden">
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
                    <Link href={urls["accordion"]}>Accordions</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["alert"]}>Alerts</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["avatar"]}>Avatars</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["badge"]}>Badges</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["breadcrumb"]}>Breadcrumbs</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["button"]}>Buttons</Link>
                    <span className="ml-4">
                      <Badge color="secondary">Updated</Badge>
                    </span>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["card"]}>Cards</Link>
                  </MenuItem>
                  {/* <MenuItem>
                    <Link href={urls["carousel"]}>Carousels</Link>
                    <span className="ml-4">
                      <Badge color="success">New</Badge>
                    </span>
                  </MenuItem> */}
                  <MenuItem>
                    <Link href={urls["navbar"]}>Navbars</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["pagination"]}>Paginations</Link>
                    <span className="ml-4">
                      <Badge color="secondary">Updated</Badge>
                    </span>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["skeleton"]}>Skeletons</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={urls["spinner"]}>Spinners</Link>
                    <span className="ml-4">
                      <Badge color="secondary">Updated</Badge>
                    </span>
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
                  <span className="mr-4 inline-block">«</span>
                  <Link href={this.prevPage}>Prev</Link>
                </PaginationItem>
                <PaginationItem>
                  <Link href={this.nextPage}>Next</Link>
                  <span className="ml-4 inline-block"> »</span>
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
    <View prevPage={urls["flushed"]} nextPage={urls["accordion"]}>
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
