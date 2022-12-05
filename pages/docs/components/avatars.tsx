import urls from "../../../urls";
import { View, colors, sizes } from "./index";
import { Flex } from "../../../components/utils";
import { Avatar } from "../../../components/avatar";

export default function Avatars() {
  return (
    <View prevPage={urls["alert"]} nextPage={urls["badge"]}>
      <article title="Avatars">
        <h1 className="text-gradient gradient-primary">Avatars</h1>
        <p className="text-xl font-light">
          Avatars can be used to represent people or objects. They come in
          different sizes and can be used in various scenarios.
        </p>

        <h2>Basic</h2>
        <p>
          Avatars can be custom photos, uploaded by users, or custom
          placeholders with a background and the user&apos;s name initials
          upper cased.
        </p>

        <Flex>
          {colors.map((item) => {
            return (
              <Avatar key={item} color={item}>
                YAS
              </Avatar>
            );
          })}
        </Flex>

        <h2>Sizing</h2>

        <Flex>
          {sizes.map((item) => {
            return (
              <Avatar key={item} size={item} color="info">
                YAS
              </Avatar>
            );
          })}
        </Flex>

        <h2>Gradients</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Avatar key={item} gradient color={item}>
                YAS
              </Avatar>
            );
          })}
        </Flex>
      </article>
    </View>
  );
}
