import Link from "next/link";
import { View } from "./index";
import urls from "../../../urls";
import { Breadcrumb, BreadcrumbItem } from "../../../components/breadcrumb";

export default function Breadcrumbs() {
  const description = `
    Indicate the current location within a navigational
    hierarchy that automatically adds separators.
  `;

  return (
    <View
      title="Breadcrumb"
      description={description}
      prev={urls["badge"]}
      next={urls["button"]}
    >
      <article title="Breadcrumbs">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href={urls["docs"]}>Docs</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={urls["component"]}>Components</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
        </Breadcrumb>
      </article>
    </View>
  );
}
