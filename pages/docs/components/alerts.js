import urls from "../../../urls";
import { View, colors } from ".";
import { Alert, Badge } from "../../../components/view";

export default function Alerts() {
  return (
    <View prevPage={urls["components"]} nextPage={urls["avatars"]}>
      <article title="Alerts">
        <h1 className="text-gradient gradient-primary">Alerts</h1>
        <p className="text-xl font-light">Use alerts as notifications</p>

        <h2>Basic</h2>
        <div className="grid gap-4 mb-4">
          {colors.map((item) => {
            return (
              <Alert key={item} color={item}>
                This is a simple {item} alert!
              </Alert>
            );
          })}
        </div>

        <h2>Flushed</h2>
        <div className="mb-4">
          <Alert color="info" flushed>
            This is a flushed alert!
          </Alert>
        </div>

        <h2>Modern</h2>
        <Alert color="info" modern>
          <Badge color="info" pill>
            New
          </Badge>
          This is a modern alert with a badge component!
        </Alert>
      </article>
    </View>
  );
}
