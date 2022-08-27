import urls from "../../../urls";
import { View } from ".";
import { Grid, Column } from "../../../components/utils";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Skeleton,
} from "../../../components/view";

export default function Skeletons() {
  return (
    <View prevPage={urls["pagination"]} nextPage={urls["spinner"]}>
      <article title="Spinners">
        <h1 className="text-gradient gradient-primary">Skeletons</h1>
        <p className="text-xl font-light">
          Display a placeholder preview of the content to reduce load-time frustration.
        </p>

        <h2>Basic</h2>
        <div className="mb-8">
          <Skeleton />
        </div>

        <h2>Text</h2>
        <div className="mb-8">
          <Skeleton type="text" />
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
                      <Skeleton enableSizing size="2word" type="text" />
                      <Skeleton enableSizing size="word" type="text" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <figure>
                <Skeleton type="square" />
              </figure>
              <CardBody>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>
                    <Skeleton enableSizing size="word" type="text" />
                    <span className="inline-block ml-4">
                      <Skeleton enableSizing size="2word" type="text" />
                    </span>
                  </div>
                  <Skeleton enableSizing size="word" type="text" />
                </div>
                <p className="flex flex-col gap-2 mb-0">
                  <Skeleton type="text" />
                  <Skeleton enableSizing size="5word" type="text" />
                </p>
              </CardBody>
              <CardFooter>
                <Skeleton enableSizing size="2word" type="text" />
              </CardFooter>
            </Card>
          </Column>
          <Column span="6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar color="info" enableSizing size="md">
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
                <p className="mb-0">
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
          </Column>
        </Grid>
      </article>
    </View>
  );
}
