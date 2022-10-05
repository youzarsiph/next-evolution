import urls from "../../../urls";
import { View, colors, sizes } from ".";
import { Flex } from "../../../components/utils";
import { Avatar } from "../../../components/view";

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
          uppercased.
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

        <h2>Images</h2>

        <Flex>
          {sizes.map((item) => {
            return (
              <Avatar key={item} size={item} color="info">
                <figure className="absolute inset-0 mb-0 object-cover">
                  <svg
                    className="h-full w-full rounded-full"
                    width="800"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                  </svg>
                </figure>
              </Avatar>
            );
          })}
        </Flex>
      </article>
    </View>
  );
}
