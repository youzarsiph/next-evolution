import { View } from "./index";
import urls from "../../../urls";
import { Flex } from "../../../components/utils";
import { Spinner } from "../../../components/spinner";
import { colors } from "../../../components/constants";

export default function Spinners() {
  const description = `
    Indicate the loading state of a component or page with our spinners.
  `;

  return (
    <View
      title="Spinner"
      description={description}
      prev={urls["skeleton"]}
      next={urls["component"]}
    >
      <article title="Spinners">
        <h2>Basic</h2>
        <Flex>
          {colors.map((item) => {
            return <Spinner key={item} color={item} />;
          })}
        </Flex>

        <h2>Ping</h2>
        <Flex>
          {colors.map((item) => {
            return <Spinner key={item} color={item} type="circle" />;
          })}
        </Flex>

        <h2>Filled</h2>
        <Flex>
          {colors.map((item) => {
            return <Spinner key={item} color={item} type="filled" />;
          })}
        </Flex>

        <h2>Gradient</h2>
        <Flex>
          {colors.map((item) => {
            return <Spinner key={item} color={item} gradient />;
          })}
        </Flex>
      </article>
    </View>
  );
}
