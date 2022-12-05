import urls from "../../../urls";
import { View } from "./index";
import { Grid, Column } from "../../../components/utils";
import { Avatar } from "../../../components/avatar";
import { Skeleton } from "../../../components/skeleton";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "../../../components/card";

export default function Skeletons() {
  return (
    <View prevPage={urls["pagination"]} nextPage={urls["spinner"]}>
      <article title="Spinners">
        <h1 className="text-gradient gradient-primary">Skeletons</h1>
        <p className="text-xl font-light">
          Display a placeholder preview of the content to reduce load-time
          frustration.
        </p>

        <h2>Basic</h2>
        <div className="mb-8">
          <Skeleton className={"w-full"} />
        </div>

        <h2>Text</h2>
        <div className="mb-8">
          <Skeleton type={"text"} className={"w-full"} />
          <Skeleton type={"text"} className={"w-3/4"} />
          <Skeleton type={"text"} className={"w-2/4"} />
        </div>

        <h2>Circle</h2>
        <div className="mb-8">
          <Skeleton type="circle" />
        </div>

        <h2>Example</h2>
        <Grid>
          <Column span="6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Skeleton type="circle" />
                    <div className="flex flex-col gap-2">
                      <Skeleton type="text" className={"w-24"} />
                      <Skeleton type="text" className="h-2 w-12" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <figure>
                <Skeleton />
              </figure>
              <CardBody>
                <div className="mb-4 flex items-center justify-between text-sm">
                  <div>
                    <Skeleton type="text" />
                    <span className="ml-4 inline-block">
                      <Skeleton type="text" />
                    </span>
                  </div>
                  <Skeleton type="text" />
                </div>
                <p className="mb-0 flex flex-col gap-2">
                  <Skeleton type="text" className={"w-full"} />
                  <Skeleton type="text" className={"w-3/4"} />
                </p>
              </CardBody>
              <CardFooter>
                <Skeleton type="text" className={"w-32"} />
              </CardFooter>
            </Card>
          </Column>
          <Column span="6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar color="info" size="md">
                      YAS
                    </Avatar>
                    <div className="grid">
                      <span className="font-semibold">Yousef Abu Shanab</span>
                      <span className="text-sm text-slate-400">
                        New York, US
                      </span>
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
                <p className="mb-0">
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
          </Column>
        </Grid>
      </article>
    </View>
  );
}
