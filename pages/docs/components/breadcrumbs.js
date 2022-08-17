import { View } from ".";
import Link from "next/link";
import urls from "../../../urls";
import { Breadcrumb, BreadcrumbItem } from "../../../components/navigation";

export default function Breadcrumbs() {
  return (
    <View prevPage={urls["badges"]} nextPage={urls["buttons"]}>
      <article title="Breadcrumbs">
        <h1 className="text-gradient gradient-primary">Breadcrumbs</h1>

        <Breadcrumb>
          <BreadcrumbItem>
            <Link href={urls["home"]}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={urls["docs"]}>Docs</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href={urls["components"]}>Components</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Breadcrumbs</BreadcrumbItem>
        </Breadcrumb>
      </article>
    </View>
  );
}
