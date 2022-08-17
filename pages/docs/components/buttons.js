import urls from "../../../urls";
import { View, colors, sizes } from ".";
import { Flex } from "../../../components/utils";
import { Button } from "../../../components/view";

export default function Buttons() {
  return (
    <View prevPage={urls["breadcrumbs"]} nextPage={urls["cards"]}>
      <article title="Buttons">
        <h1 className="text-gradient gradient-primary">Buttons</h1>

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
              <Button key={item} color={"info"} sizingEnabled size={item}>
                btn-{item}
              </Button>
            );
          })}
        </Flex>

        <h2>Gradient</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Button key={item} bgGradinetEnabled color={item}>
                {item}
              </Button>
            );
          })}
        </Flex>
      </article>
    </View>
  );
}
