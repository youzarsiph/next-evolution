import urls from "../../../urls";
import { View } from "../components/index";

export default function Images() {
  return (
    <View
      title="Images"
      description="Images &amp; Figures"
      prev={urls["typography"]}
      next={urls["tables"]}
    >
      <article title="Images">
        <div className="grid gap-4 lg:grid-cols-2">
          <figure>
            <svg
              className="w-full rounded-lg"
              width="800"
              height="400"
              role="img"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <figcaption>This text explains the figure</figcaption>
          </figure>

          <figure>
            <svg
              className="w-full rounded-3xl"
              width="800"
              height="400"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
            </svg>
            <figcaption>A short description of the image</figcaption>
          </figure>
        </div>
      </article>
    </View>
  );
}
