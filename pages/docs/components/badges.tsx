import { View } from "./index";
import urls from "../../../urls";
import { Flex } from "../../../components/utils";
import { Badge } from "../../../components/badge";
import { colors } from "../../../components/constants";

export default function Badges() {
  const description = `
    Documentation and examples for badges, our small count and labeling
    component.
  `;

  return (
    <View
      title="Badge"
      description={description}
      prev={urls["avatar"]}
      next={urls["breadcrumb"]}
    >
      <article title="Badges">
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
