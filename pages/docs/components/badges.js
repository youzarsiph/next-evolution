import urls from "../../../urls";
import { View, colors } from ".";
import { Badge } from "../../../components/view";
import { Flex } from "../../../components/utils";

export default function Badges() {
  return (
    <View prevPage={urls["avatars"]} nextPage={urls["breadcrumbs"]}>
      <article title="Badges">
        <h1 className="text-gradient gradient-primary">Badges</h1>

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
      </article>
    </View>
  );
}
