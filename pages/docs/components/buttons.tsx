import { View } from "./index";
import urls from "../../../urls";
import { Flex } from "../../../components/utils";
import { Button } from "../../../components/button";
import { colors, sizes } from "../../../components/constants";

export default function Buttons() {
  const description = `
    Use our buttons for actions in forms, dialogs, and more with support
    for multiple sizes, states, and more.
  `;

  return (
    <View
      title="Button"
      description={description}
      prev={urls["breadcrumb"]}
      next={urls["card"]}
    >
      <article title="Buttons">
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
              <Button key={item} color={item} outline>
                {item}
              </Button>
            );
          })}
        </Flex>

        <h2>Sizing</h2>

        <Flex>
          {sizes.map((item) => {
            return (
              <Button key={item} color={"info"} size={item}>
                btn-{item}
              </Button>
            );
          })}
        </Flex>

        <h2>Gradient</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Button key={item} gradient color={item}>
                Gradient {item}
              </Button>
            );
          })}
        </Flex>

        <h2>Shapes</h2>

        <Flex>
          <Button color={"primary"}>Default</Button>
          <Button color={"primary"} pill>
            Pill
          </Button>
        </Flex>
      </article>
    </View>
  );
}
