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
              <NavbarBrand href={urls["home"]}>Evolution UI</NavbarBrand>
              <MenuToggler id="xToggler0" menuID="xMenu0" />
            </NavbarContainer>

            <NavbarMenu id="xMenu0">
              <MenuItem>Home</MenuItem>
              <MenuItem>Docs</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
            </NavbarMenu>
          </Navbar>
        </div>

        <h2>Bordered & Rounded</h2>
        <Navbar id="x" bordered rounded>
          <NavbarContainer>
            <NavbarBrand href={urls["home"]}>Evolution UI</NavbarBrand>
            <MenuToggler id="xToggler" menuID="xMenu" />
          </NavbarContainer>

          <NavbarMenu id="xMenu">
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
