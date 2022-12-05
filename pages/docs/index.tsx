import urls from "../../urls";
import { View } from "./components/index";

export default function Docs() {
  return (
    <View prevPage={urls["home"]} nextPage={urls["contents"]}>
      <section title="Docs">
        <h1 className="text-gradient gradient-primary">Docs</h1>
        <p className="text-xl font-light">
          Hey there! You are looking at the UI&apos;s official documentation.
          Flexible, ready to use UI components which will bring you so much
          closer to your end goals. Let&apos;s dive in.
        </p>
      </section>
    </View>
  );
}
