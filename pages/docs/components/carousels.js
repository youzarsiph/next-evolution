import { View } from ".";
import { Carousel } from "../../../components/view";
import urls from "../../../urls";

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
