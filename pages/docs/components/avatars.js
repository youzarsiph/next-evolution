import urls from "../../../urls";
import { View, colors, sizes } from ".";
import { Flex } from "../../../components/utils";
import { Avatar } from "../../../components/view";

export default function Avatars() {

  return (
    <View prevPage={urls["alerts"]} nextPage={urls["badges"]}>
      <article title="Avatars">
        <h1 className="text-gradient gradient-primary">Avatars</h1>

        <h2>Basic</h2>

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
              <Avatar key={item} sizingEnabled size={item} color="info">
                YAS
              </Avatar>
            );
          })}
        </Flex>

        <h2>Gradients</h2>

        <Flex>
          {colors.map((item) => {
            return (
              <Avatar key={item} bgGradinetEnabled color={item}>
                YAS
              </Avatar>
            );
          })}
        </Flex>

        <h2>Images</h2>

        <Flex>
          {sizes.map((item) => {
            return (
              <Avatar key={item} sizingEnabled size={item} color="info">
                <figure className="absolute inset-0 mb-0 object-cover">
                  <svg
                    className="w-full h-full rounded-full"
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
