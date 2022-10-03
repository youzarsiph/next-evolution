import { View } from ".";
import urls from "../../../urls";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from "../../../components/view";

export default function Accordions() {
  return (
    <View prevPage={urls["tables"]} nextPage={urls["alert"]}>
      <article title="Accordions">
        <h1 className="text-gradient gradient-primary">Accordions</h1>
        <p className="text-xl font-light"></p>

        <h2>Basic</h2>
        <Accordion>
          <AccordionItem>
            <AccordionButton id="x">What we offer?</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur ut nemo porro officia necessitatibus modi autem
              repellendus quod debitis adipisci labore, fugit explicabo harum
              reiciendis ipsum sed amet veniam numquam.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton id="y">Who we are?</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              perferendis ut molestiae velit sed consequuntur praesentium, quo
              temporibus molestias suscipit, sapiente labore quod vel fugit
              deleniti corrupti recusandae. Illum, veritatis.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </View>
  );
}
