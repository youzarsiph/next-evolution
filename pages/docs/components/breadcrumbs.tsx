import Link from "next/link";
import { View } from "./index";
import urls from "../../../urls";
import { Breadcrumb, BreadcrumbItem } from "../../../components/breadcrumb";

export default function Breadcrumbs() {
  return (
    <View prevPage={urls["badge"]} nextPage={urls["button"]}>
      <article title="Breadcrumbs">
        <h1 className="text-gradient gradient-primary">Breadcrumbs</h1>
        <p className="text-xl font-light">
          Indicate the current page&apos;s location within a navigational
          hierarchy that automatically adds separators.
        </p>

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
