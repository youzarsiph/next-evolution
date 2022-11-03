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
        <div className="mb-8 max-w-md">
          <Card>
            <div className="bg-gradient gradient-primary flex h-72 items-center justify-center rounded-t-lg text-5xl text-white">
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
        <div className="mb-8 grid gap-4 lg:grid-cols-2">
          <Card>
            <CardBody>
              <h5>Special treatment</h5>
              <p className="mb-6 font-bold text-slate-400">2hrs ago</p>
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
              <div className="mb-6 flex items-center gap-4 font-bold">
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
        <div className="mb-8 grid gap-4 lg:grid-cols-2">
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

        <div className="mb-8 max-w-lg">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar color="info" size="sm">
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
              <div className="bg-gradient gradient-info flex h-80 items-center justify-center text-4xl text-white lg:h-96 lg:text-5xl">
                Next Evolution
              </div>
            </figure>
            <CardBody>
              <div className="mb-4 flex items-center justify-between text-sm">
                <div>
                  <span className="mr-4 text-red-500">Loved</span>
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
                className="form-control form-control-flushed rounded-none border-none p-0"
                placeholder="Add comment"
              />
            </CardFooter>
          </Card>
        </div>
      </article>
    </View>
  );
}
