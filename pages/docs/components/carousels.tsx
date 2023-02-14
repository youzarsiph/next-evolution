import { View } from "./index";
import urls from "../../../urls";
import { Carousel } from "../../../components/carousel";

export default function Carousels() {
  const description = `Carousel test`;

  return (
    <View
      title="Carousel"
      description={description}
      prev={urls["card"]}
      next={urls["navbar"]}
    >
      <article title="Carousels">
        <Carousel />
      </article>
    </View>
  );
}
