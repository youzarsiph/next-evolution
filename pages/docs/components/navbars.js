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
    <View prevPage={urls["cards"]} nextPage={urls["paginations"]}>
      <article className="mb-8" title="Navbars">
        <h1 className="text-gradient gradient-primary">Navbars</h1>

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
