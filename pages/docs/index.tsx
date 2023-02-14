import urls from "../../urls";
import { View } from "./components/index";

export default function Docs() {
  const description = `
    Hey there! You are looking at the UI's official documentation.
    Flexible, ready to use UI components which will bring you so much
    closer to your end goals. Let's dive in.
  `;

  return (
    <View
      title="Docs"
      description={description}
      prev={urls["home"]}
      next={urls["contents"]}
    ></View>
  );
}
