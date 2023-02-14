import { View } from "./index";
import urls from "../../../urls";
import { Flex } from "../../../components/utils";
import { Avatar } from "../../../components/avatar";
import { colors, sizes } from "../../../components/constants";

export default function Avatars() {
  const description = `
    Avatars can be used to represent people or objects. They come in
    different sizes and can be used in various scenarios.
  `;

  return (
    <View
      title="Avatar"
      description={description}
      prev={urls["alert"]}
      next={urls["badge"]}
    >
      <article title="Avatars">
        <h2>Basic</h2>
        <p>
          Avatars can be custom photos, uploaded by users, or custom
          placeholders with a background and the user's name initials upper
          cased.
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
