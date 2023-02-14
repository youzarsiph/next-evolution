import urls from "../../../urls";
import { View } from "../components/index";

export default function Contents() {
  const description = `
    Contents are the main building block of an app and it includes
    typography, images and tables. In this section we are going to explore
    the contents in Evolution UI.
  `;

  return (
    <View
      title="Contents"
      description={description}
      prev={urls["home"]}
      next={urls["typography"]}
    ></View>
  );
}
