import { View } from "./index";
import urls from "../../../urls";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from "../../../components/accordion";

export default function Accordions() {
  return (
    <View prevPage={urls["tables"]} nextPage={urls["alert"]}>
      <article title="Accordions">
        <h1 className="text-gradient gradient-primary">Accordions</h1>
        <p className="text-xl font-light">
          The accordion component allows the user to show and hide sections of
          the related content on a page.
        </p>

        <h2>Basic</h2>
        <Accordion>
          <AccordionItem>
            <AccordionButton id="x">Offers</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur ut nemo porro officia necessitatibus modi autem
              repellendus quod debitis adipisci labore, fugit explicabo harum
              reiciendis ipsum sed amet veniam numquam.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton id="y">Products</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              perferendis ut molestiae velit sed consequuntur praesentium, quo
              temporibus molestias suscipit, sapiente labore quod vel fugit
              deleniti corrupti recusandae. Illum, veritatis.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton id="z">Refund policy</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, voluptatibus blanditiis! Quos quisquam, vero
              voluptatibus itaque, magnam similique minima esse nulla omnis nisi
              nemo molestiae velit eaque optio aspernatur cupiditate.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h2>Flushed</h2>
        <Accordion flushed>
          <AccordionItem>
            <AccordionButton id="a">Offers</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur ut nemo porro officia necessitatibus modi autem
              repellendus quod debitis adipisci labore, fugit explicabo harum
              reiciendis ipsum sed amet veniam numquam.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton id="b">Products</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              perferendis ut molestiae velit sed consequuntur praesentium, quo
              temporibus molestias suscipit, sapiente labore quod vel fugit
              deleniti corrupti recusandae. Illum, veritatis.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton id="c">Refund policy</AccordionButton>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium, voluptatibus blanditiis! Quos quisquam, vero
              voluptatibus itaque, magnam similique minima esse nulla omnis nisi
              nemo molestiae velit eaque optio aspernatur cupiditate.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </View>
  );
}
