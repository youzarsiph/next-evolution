import { View } from "./index";
import urls from "../../../urls";
import { Accordion, AccordionItem } from "../../../components/accordion";

export default function Accordions() {
  const description = `
    The accordion component allows the user to show and hide sections of
    the related content on a page.
  `;

  return (
    <View
      title="Accordion"
      description={description}
      prev={urls["tables"]}
      next={urls["alert"]}
    >
      <article title="Accordions">
        <h2>Basic</h2>
        <Accordion>
          <AccordionItem label="Offers">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            maxime assumenda magni sequi rem, cum distinctio iure repellat
            exercitationem voluptates tempore ea minus sed, eveniet quis
            repudiandae enim hic molestias?
          </AccordionItem>

          <AccordionItem label="Products">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            perferendis ut molestiae velit sed consequuntur praesentium, quo
            temporibus molestias suscipit, sapiente labore quod vel fugit
            deleniti corrupti recusandae. Illum, veritatis.
          </AccordionItem>

          <AccordionItem label="Refund policy">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, voluptatibus blanditiis! Quos quisquam, vero
            voluptatibus itaque, magnam similique minima esse nulla omnis nisi
            nemo molestiae velit eaque optio aspernatur cupiditate.
          </AccordionItem>
        </Accordion>

        <h2>Flushed</h2>
        <Accordion flushed>
          <AccordionItem label="Offers">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            maxime assumenda magni sequi rem, cum distinctio iure repellat
            exercitationem voluptates tempore ea minus sed, eveniet quis
            repudiandae enim hic molestias?
          </AccordionItem>
          <AccordionItem label="Products">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            perferendis ut molestiae velit sed consequuntur praesentium, quo
            temporibus molestias suscipit, sapiente labore quod vel fugit
            deleniti corrupti recusandae. Illum, veritatis.
          </AccordionItem>
          <AccordionItem label="Refund policy">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium, voluptatibus blanditiis! Quos quisquam, vero
            voluptatibus itaque, magnam similique minima esse nulla omnis nisi
            nemo molestiae velit eaque optio aspernatur cupiditate.
          </AccordionItem>
        </Accordion>
      </article>
    </View>
  );
}
