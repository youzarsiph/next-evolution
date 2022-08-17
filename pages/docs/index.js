import urls from "../../urls";
import { View } from "./components";

export default function Docs() {
  return (
    <View prevPage={urls["home"]} nextPage={urls["contents"]}>
      <section title="Docs">
        <h1 className="text-gradient gradient-primary">Docs</h1>
      </section>
    </View>
  );
}
