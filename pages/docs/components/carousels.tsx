import { View } from "./index";
import urls from "../../../urls";
import { Carousel } from "../../../components/carousel";

export default function Carousels() {
  return (
    <View prevPage={urls["card"]} nextPage={urls["navbar"]}>
      <article title="Cards">
        <h1 className="text-gradient gradient-primary">Carousels</h1>
        <p className="text-xl font-light">Carousel test</p>
        <Carousel />
      </article>
    </View>
  );
}
