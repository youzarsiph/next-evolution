import { View } from "./index";
import urls from "../../../urls";
import { Alert } from "../../../components/alert";
import { Badge } from "../../../components/badge";
import { colors } from "../../../components/constants";

export default function Alerts() {
  const description = `
    Provide contextual feedback messages for typical user actions with the
    handful of available and flexible alert messages.
  `;

  return (
    <View
      title="Alert"
      description={description}
      prev={urls["accordion"]}
      next={urls["avatar"]}
    >
      <article title="Alerts">
        <h2>Basic</h2>
        <div className="mb-4 grid gap-4">
          {colors.map((item) => {
            return (
              <Alert key={item} color={item}>
                This is a simple {item} alert!
              </Alert>
            );
          })}
        </div>

        <h2>Flushed</h2>
        <p>
          Get a flash message that is full width and removes border and reduces
          radius by adding the flushed attribute.
        </p>
        <div className="mb-4">
          <Alert color="info" flushed>
            This is a flushed alert!
          </Alert>
        </div>

        <h2>Modern</h2>
        <p>
          Easy to get the attention without making it look too bad. Use the
          modern attribute on any alert component.
        </p>
        <div className="mb-4">
          <Alert color="info" modern>
            <Badge color="info" pill>
              New
            </Badge>
            This is a modern alert with a badge component!
          </Alert>
        </div>

        <h2>Additional content</h2>
        <Alert color="info" flushed>
          <h3 className="text-sky-400">Well Done!</h3>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
        </Alert>
      </article>
    </View>
  );
}
