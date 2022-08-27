import { View } from ".";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "../../../components/view";
import urls from "../../../urls";

export default function Cards() {
  return (
    <View prevPage={urls["button"]} nextPage={urls["navbar"]}>
      <article title="Cards">
        <h1 className="text-gradient gradient-primary">Cards</h1>
        <p className="text-xl font-light">
          Our cards provide a flexible and extensible content container with
          multiple variants and options
        </p>

        <h2>Basic</h2>
        <div className="max-w-md mb-8">
          <Card>
            <div className="flex items-center justify-center h-72 bg-gradient gradient-primary text-white text-5xl rounded-t-lg">
              Next Evolution
            </div>
            <CardBody>
              <h5>Card title</h5>
              <p>Some quick example text...</p>
              <Button color="info">Go somewhere</Button>
            </CardBody>
          </Card>
        </div>

        <h2>Metadata</h2>
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardBody>
              <h5>Special treatment</h5>
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
              <h5>Special treatment</h5>
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
              <h5>Special treatment</h5>
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
              <h5>Special treatment</h5>
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

        <h2>Actions</h2>
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h5 className="mb-0">Favorite Post</h5>
                <span className="text-xl font-bold text-yellow-400 hover:text-yellow-500">
                  Star
                </span>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </CardBody>
            <CardFooter>
              <div className="flex items-center justify-between">
                <Button color="primary">Action Button</Button>
                <div className="font-bold text-slate-400">2hrs</div>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h5 className="mb-0">Favorite Post</h5>
                <span className="text-xl font-bold text-yellow-400 hover:text-yellow-500">
                  Star
                </span>
                <span className="text-xl font-bold text-red-500 hover:text-red-600">
                  Love
                </span>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </CardBody>
            <CardFooter>
              <div className="flex items-center justify-between">
                <Button color="primary">Action Button</Button>
                <div className="font-bold text-slate-400">2hrs</div>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-lg mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar color="info" enableSizing size="sm">
                    YAS
                  </Avatar>
                  <div className="grid">
                    <span className="font-semibold">Yousef Abu Shanab</span>
                    <span className="text-sm text-slate-400">New York, US</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <figure>
              <div className="flex items-center justify-center h-80 lg:h-96 bg-gradient gradient-info text-white text-4xl lg:text-5xl">
                Next Evolution
              </div>
            </figure>
            <CardBody>
              <div className="flex items-center justify-between mb-4 text-sm">
                <div>
                  <span className="text-red-500 mr-4">Loved</span>
                  Comment
                </div>
                Bookmark
              </div>
              <p>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </CardBody>
            <CardFooter>
              <input
                type="text"
                className="form-control form-control-flushed py-0 border-b-0"
                placeholder="Add comment"
              />
            </CardFooter>
          </Card>
        </div>

        <h2>Gradients</h2>
        <div className="grid lg:grid-cols-2 gap-4">
          <Card>
            <CardBody>
              <h5 className="text-gradient gradient-primary">Next Evolution</h5>
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
              <h5 className="text-gradient gradient-info">
                The Evolution of the UI
              </h5>
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
              <div className="flex items-center justify-center h-80 lg:h-96 bg-gradient gradient-success rounded-lg text-white text-4xl lg:text-5xl">
                Evolution UI
              </div>
            </figure>
            <CardBody>
              <h5 className="text-gradient gradient-info">
                Evolution in the UI
              </h5>
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
                <div className="flex items-center justify-center h-80 lg:h-96 bg-gradient gradient-danger rounded-xl text-white text-4xl lg:text-5xl">
                  Evolution UI
                </div>
              </figure>
              <h5 className="text-gradient gradient-warning">UI Evolved</h5>
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
