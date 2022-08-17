import { View } from ".";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "../../../components/view";
import urls from "../../../urls";

export default function Cards() {
  return (
    <View prevPage={urls["buttons"]} nextPage={urls["navbars"]}>
      <article title="Cards">
        <h1 className="text-gradient gradient-primary">Cards</h1>
        <p className="text-xl font-light">
          Our cards provide a flexible and extensible content container with
          multiple variants and options
        </p>

        <h2>Basic</h2>
        <div className="mb-4 max-w-md">
          <Card>
            <div className="flex items-center justify-center h-72 bg-gradient gradient-primary text-white text-5xl rounded-t-lg">
              Next Evolution
            </div>
            <CardBody>
              <h3>Card title</h3>
              <p>Some quick example text...</p>
              <Button color="info">Go somewhere</Button>
            </CardBody>
          </Card>
        </div>

        <h2>Metadata</h2>
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          <Card>
            <CardBody>
              <h3>Special treatment</h3>
              <p className="font-bold text-slate-400 mb-6">2hrs ago</p>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="primary">Go somewhere</Button>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3>Special treatment</h3>
              <div className="flex items-center gap-4 mb-6 font-bold">
                <span className="text-pink-400">50 Likes</span>
                750 Views
              </div>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="primary">Go somewhere</Button>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h3>Special treatment</h3>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="primary">Go somewhere</Button>
            </CardBody>
            <CardFooter>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-bold">
                  <Avatar color="info">YAS</Avatar>
                  Yousef Abu Shanab
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-pink-400">50 Likes</span>
                  750 Views
                </div>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardBody>
              <h3>Special treatment</h3>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Button color="primary">Go somewhere</Button>
            </CardBody>
            <CardFooter>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 font-bold">
                  <Avatar color="info">YAS</Avatar>
                  Yousef Abu Shanab
                </div>
                <div className="font-bold">2hrs</div>
              </div>
            </CardFooter>
          </Card>
        </div>

        <h2>Gradients</h2>
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
              <div className="flex items-center justify-center h-96 bg-gradient gradient-success rounded-lg text-white text-5xl">
                Evolution UI
              </div>
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
            <CardBody>
              <figure>
                <div className="flex items-center justify-center h-96 bg-gradient gradient-danger rounded-xl text-white text-5xl">
                  Evolution UI
                </div>
              </figure>
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
