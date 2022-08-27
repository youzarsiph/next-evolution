import urls from "../../../urls";
import { View, colors } from ".";
import { Badge } from "../../../components/view";
import { Flex } from "../../../components/utils";

export default function Badges() {
  return (
    <View prevPage={urls["avatar"]} nextPage={urls["breadcrumb"]}>
      <article title="Badges">
        <h1 className="text-gradient gradient-primary">Badges</h1>
        <p className="text-xl font-light">
          Documentation and examples for badges, our small count and labeling
          component.
        </p>

        <h2>Basic</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Badge key={item} color={item}>
                {item}
              </Badge>
            );
          })}
        </Flex>

        <Flex>
          {colors.map((item) => {
            return (
              <Badge key={item} color={item}>
                {5}
              </Badge>
            );
          })}
        </Flex>

        <h2>Outline</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Badge key={item} color={item} enableOutline>
                {item}
              </Badge>
            );
          })}
        </Flex>
      </article>
    </View>
  );
}
