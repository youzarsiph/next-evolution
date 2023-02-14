import { View } from "./index";
import urls from "../../../urls";
import { Skeleton } from "../../../components/skeleton";

export default function Skeletons() {
  const description = `
    Display a placeholder preview of the content to reduce load-time
    frustration.
  `;

  return (
    <View
      title="Spinner"
      description={description}
      prev={urls["pagination"]}
      next={urls["spinner"]}
    >
      <article title="Spinners">
        <h2>Basic</h2>
        <div className="mb-8">
          <Skeleton />
        </div>

        <h2>Text</h2>
        <div className="mb-8">
          <Skeleton width="100%" type={"text"} />
          <Skeleton width="75%" type={"text"} />
          <br />
          <Skeleton width="25%" type={"text"} />
        </div>

        <h2>Circle</h2>
        <div className="mb-8">
          <Skeleton type="circle" />
        </div>
      </article>
    </View>
  );
}
