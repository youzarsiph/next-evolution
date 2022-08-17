import urls from "../../../urls";
import { View } from "../components";

export default function Contents() {
  return (
    <View prevPage={urls["home"]} nextPage={urls["typography"]}>
      <section title="Docs">
        <h1 className="text-gradient gradient-primary">Contents</h1>
      </section>
    </View>
  );
}
