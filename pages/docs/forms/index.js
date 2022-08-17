import urls from "../../../urls";
import { View } from "../components";

export default function Forms() {
  return (
    <View prevPage={urls["tables"]} nextPage={urls["overview"]}>
      <section title="Docs">
        <h1 className="text-gradient gradient-primary">Forms</h1>
      </section>
    </View>
  );
}
