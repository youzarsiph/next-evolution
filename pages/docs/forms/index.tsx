import urls from "../../../urls";
import { View } from "../components/index";

export default function Forms() {
  const description = `
    Forms inputs are one of the most important elements of an app. In this
    section and the following sections we are going to learn about Input
    components in Evolution UI.
  `;

  return (
    <View
      title="Forms"
      description={description}
      prev={urls["tables"]}
      next={urls["overview"]}
    ></View>
  );
}
