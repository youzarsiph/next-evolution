import { View } from "./index";
import urls from "../../../urls";
import { Navbar, NavItem } from "../../../components/navbar";

export default function NavbarPage() {
  const description = `
    Documentation and examples for responsive navigation header. Includes
    support for branding, navigation, and more.
  `;

  return (
    <View
      title="Navbar"
      description={description}
      prev={urls["card"]}
      next={urls["pagination"]}
    >
      <article title="Navbar">
        <h2>Basic</h2>
        <Navbar brand={"EvolutionUI"}>
          <NavItem>Home</NavItem>
          <NavItem>Docs</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </Navbar>
      </article>
    </View>
  );
}
