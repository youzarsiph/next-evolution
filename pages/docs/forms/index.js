import urls from "../../../urls";
import { View } from "../components";

export default function Forms() {
  return (
    <View prevPage={urls["tables"]} nextPage={urls["overview"]}>
      <section title="Docs">
        <h1 className="text-gradient gradient-primary">Forms</h1>
        <p className="text-xl font-light">
          Forms inputs are one of the most important elements of an app. In this
          section and the following sections we are going to learn about Input
          components in Evolution UI.
        </p>
      </section>
    </View>
  );
}
