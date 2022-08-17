import { View } from ".";
import { Card, CardBody } from "../../../components/view";
import urls from "../../../urls";

export default function Cards() {
  return (
    <View prevPage={urls["buttons"]} nextPage={urls["navbars"]}>
      <article title="Cards">
        <h1 className="text-gradient gradient-primary">Cards</h1>

        <div className="grid lg:grid-cols-2 gap-4">
          <Card>
            <CardBody>
              <h3 className="text-gradient gradient-primary grid-row">
                Next Evolution
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                veniam suscipit sed autem animi culpa dolores voluptatibus
                dolore, fuga beatae eaque. Laudantium expedita earum itaque
                animi voluptatibus enim quasi explicabo.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3 className="text-gradient gradient-info">
                The Evolution of the UI
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos, minima, earum error culpa eius repudiandae
                aspernatur tempore id quis voluptates inventore ullam. Laborum
                voluptates nihil saepe.
              </p>
            </CardBody>
          </Card>

          <Card>
            <figure>
              <svg
                className="w-full rounded-lg"
                width="800"
                height="400"
                role="img"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
            </figure>
            <CardBody>
              <h3 className="text-gradient gradient-info">
                Evolution in the UI
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                culpa ea, aliquid ad excepturi fugit asperiores a impedit
                debitis, obcaecati error eligendi amet fuga sed veritatis
                recusandae suscipit iure nisi.
              </p>
            </CardBody>
          </Card>

          <Card>
            <figure className="pt-4 px-2">
              <svg
                className="w-full rounded-lg"
                width="800"
                height="400"
                role="img"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"></rect>
              </svg>
            </figure>
            <CardBody>
              <h3 className="text-gradient gradient-warning">UI Evolved</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus rem eligendi provident dolores, ad quis
                blanditiis ex vel consectetur est beatae? In porro error optio
                id pariatur voluptas cumque iure?
              </p>
            </CardBody>
          </Card>
        </div>
      </article>
    </View>
  );
}
