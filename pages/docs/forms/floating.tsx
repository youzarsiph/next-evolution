import urls from "../../../urls";
import { View } from "../components/index";
import { Input, Label, Textarea } from "../../../components/input";

export default function Floating() {
  return (
    <View
      title="Floating Labels"
      description="Floating Label Inputs"
      prev={urls["overview"]}
      next={urls["flushed"]}
    >
      <article title="Floating labels">
        <Label text="Email" for="email" floating>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={"Email"}
            floating
          />
          <small className="text-slate-400">
            We'll never share your email with anyone else.
          </small>
        </Label>

        <Label text="Password" for="pass" floating>
          <Input
            id="pass"
            name="pass"
            type="password"
            placeholder={"Password"}
            floating
          />
        </Label>

        <Label text="Message" for="message" floating>
          <Textarea
            id="message"
            name="message"
            placeholder={"Message"}
            floating
          ></Textarea>
        </Label>

        <Label text="Upload" for="upload" floating>
          <Input id="upload" type="file" name="upload" floating />
        </Label>
      </article>
    </View>
  );
}
