import urls from "../../../urls";
import { View } from "../components";

export default function Contents() {
  return (
    <View prevPage={urls["home"]} nextPage={urls["typography"]}>
      <section title="Docs">
        <h1 className="text-gradient gradient-primary">Contents</h1>
        <p className="text-xl font-light">
          Contents are the main building block of an app and it includes typography, images and tables. 
          In this section we are going to explore the contents in Evolution UI.
        </p>
      </section>
    </View>
  );
}
