import { View } from ".";
import urls from "../../../urls";
import {
  Navbar,
  NavbarBrand,
  NavbarContainer,
  NavbarMenu,
  MenuToggler,
  MenuItem,
} from "../../../components/navigation";

export default function Navbars() {
  return (
    <View prevPage={urls["card"]} nextPage={urls["pagination"]}>
      <article className="mb-8" title="Navbars">
        <h1 className="text-gradient gradient-primary">Navbars</h1>
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
                <span className="navbar-brand flex items-center justify-between">
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

        <h2>Borders</h2>
        <Navbar id="x" bordered rounded>
          <NavbarContainer>
            <NavbarBrand href={urls["home"]}>EvolutionUI</NavbarBrand>
            <MenuToggler id="xToggler" menuID="xMenu" />
          </NavbarContainer>

          <NavbarMenu id="xMenu">
            <li className={`navbar-menu-item navbar-menu-heading lg:hidden`}>
              <span className="navbar-brand flex items-center justify-between">
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
