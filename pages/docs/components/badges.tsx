import urls from "../../../urls";
import { View, colors } from "./index";
import { Badge } from "../../../components/badge";
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
              <Badge key={item} color={item} outline>
                {item}
              </Badge>
            );
          })}
        </Flex>

        <h2>Shapes</h2>

        <Flex>
          <Badge>Default</Badge>
          <Badge pill>Pill</Badge>
        </Flex>
      </article>
    </View>
  );
}
