import urls from "../../../urls";
import { View } from "../components/index";
import { FloatingLabel } from "../../../components/input";

export default function Floating() {
  return (
    <View
      title="Floating Labels"
      description="Floating Label Inputs"
      prev={urls["overview"]}
      next={urls["flushed"]}
    >
      <article title="Floating labels">
        <FloatingLabel
          id="email"
          name="email"
          type="email"
          placeholder={"Email"}
        />

        <FloatingLabel
          id="pass"
          name="pass"
          type="password"
          placeholder={"Password"}
        />
      </article>
    </View>
  );
}
