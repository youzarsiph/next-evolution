import urls from "../../../urls";
import { View } from "../components";
import { Input, Textarea } from "../../../components/forms";

export default function Floating() {
  return (
    <View prevPage={urls["overview"]} nextPage={urls["flushed"]}>
      <article title="Floating labels">
        <h1 className="text-gradient gradient-primary">Floating labels</h1>

        <Input
          id="email1"
          label="Email"
          type="email"
          name="email"
          placeholder={"Email"}
          floating
          helpText="We'll never share your email with anyone else."
        />
        <Input
          id="password1"
          label="Password"
          type="password"
          name="password"
          placeholder={"Password"}
          floating
        />
        <Textarea
          id="message1"
          name="message1"
          label="Message"
          placeholder={"Message"}
          floating
        ></Textarea>

        <Input
          id="upload1"
          type="file"
          name="upload1"
          label="Upload"
          floating
        />
      </article>
    </View>
  );
}
