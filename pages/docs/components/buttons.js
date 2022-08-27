import urls from "../../../urls";
import { View, colors, sizes } from ".";
import { Flex } from "../../../components/utils";
import { Button, Spinner } from "../../../components/view";

export default function Buttons() {
  return (
    <View prevPage={urls["breadcrumb"]} nextPage={urls["card"]}>
      <article title="Buttons">
        <h1 className="text-gradient gradient-primary">Buttons</h1>
        <p className="text-xl font-light">
          Use our buttons for actions in forms, dialogs, and more with support
          for multiple sizes, states, and more.
        </p>

        <h2>Basic</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Button key={item} color={item}>
                {item}
              </Button>
            );
          })}
        </Flex>

        <h2>Outline</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Button key={item} color={item} enableOutline>
                {item}
              </Button>
            );
          })}
        </Flex>

        <h2>Sizing</h2>

        <Flex>
          {sizes.map((item) => {
            return (
              <Button key={item} color={"info"} enableSizing size={item}>
                btn-{item}
              </Button>
            );
          })}
        </Flex>

        <h2>Gradient</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Button key={item} enableBgGradient color={item}>
                {item}
              </Button>
            );
          })}
        </Flex>
      </article>
    </View>
  );
}
