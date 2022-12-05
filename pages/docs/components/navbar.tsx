import { View } from "./index";
import urls from "../../../urls";
import {
  Navbar,
  NavbarBrand,
  NavbarContainer,
  NavbarMenu,
  MenuToggler,
  MenuItem,
} from "../../../components/navbar";

export default function NavbarPage() {
  return (
    <View prevPage={urls["card"]} nextPage={urls["pagination"]}>
      <article className="mb-8" title="Navbar">
        <h1 className="text-gradient gradient-primary">Navbar</h1>
        <p className="text-xl font-light">
          Documentation and examples for responsive navigation header. Includes
          support for branding, navigation, and more.
        </p>

        <h2>Basic</h2>
        <div className="mb-4">
          <Navbar id="x0">
            <NavbarContainer>
              <NavbarBrand href={urls["home"]}>EvolutionUI</NavbarBrand>
              <MenuToggler id="xToggler0" menuID="xMenu0" />
            </NavbarContainer>

            <NavbarMenu id="xMenu0">
              <li className={`navbar-menu-item navbar-menu-heading lg:hidden`}>
                <span className="navbar-brand flex w-full items-center justify-between">
                  Evolution
                  <button type="button" className="inline-block h-8 w-8">
                    <label
                      htmlFor="xMenu0"
                      className="navbar-toggle-icon show"
                    ></label>
                  </button>
                </span>
              </li>
              <MenuItem>Home</MenuItem>
              <MenuItem>Docs</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
            </NavbarMenu>
          </Navbar>
        </div>

        <h2>Custom style</h2>
        <Navbar id="x" className={"rounded-lg border shadow-lg"}>
          <NavbarContainer>
            <NavbarBrand href={urls["home"]}>EvolutionUI</NavbarBrand>
            <MenuToggler id="xToggler" menuID="xMenu" />
          </NavbarContainer>

          <NavbarMenu id="xMenu">
            <li className={`navbar-menu-item navbar-menu-heading lg:hidden`}>
              <span className="navbar-brand flex w-full items-center justify-between">
                Evolution
                <button type="button" className="inline-block h-8 w-8">
                  <label
                    htmlFor="xMenu"
                    className="navbar-toggle-icon show"
                  ></label>
                </button>
              </span>
            </li>
            <MenuItem>Home</MenuItem>
            <MenuItem>Docs</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
          </NavbarMenu>
        </Navbar>
      </article>
    </View>
  );
}
