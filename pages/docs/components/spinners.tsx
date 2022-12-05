import urls from "../../../urls";
import { View, colors } from "./index";
import { Flex } from "../../../components/utils";
import { Spinner } from "../../../components/spinner";

export default function Spinners() {
  return (
    <View prevPage={urls["skeleton"]} nextPage={urls["component"]}>
      <article title="Spinners">
        <h1 className="text-gradient gradient-primary">Spinners</h1>
        <p className="text-xl font-light">
          Indicate the loading state of a component or page with our spinners.
        </p>

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
            return (
              <Spinner key={item} color={item} type="gradient">
                <span className="inline-block h-full w-full rounded-full bg-white" />
              </Spinner>
            );
          })}
        </Flex>
      </article>
    </View>
  );
}
