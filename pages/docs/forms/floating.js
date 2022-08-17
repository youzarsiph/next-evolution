import urls from "../../../urls";
import { View } from "../components";
import {
  Input,
  Textarea,
  Select,
} from "../../../components/forms";

export default function Floating() {
  return (
    <View prevPage={urls["overview"]} nextPage={urls["flushed"]}>
      <article title="Floating lables">
        <h1 className="text-gradient gradient-primary">Floating labels</h1>

        <Input
          id="email1"
          label="Email"
          type="email"
          name="email"
          floating
          helpText="We'll never share your email with anyone else."
        />
        <Input
          id="password1"
          label="Password"
          type="password1"
          name="password"
          floating
        />
        <Textarea
          id="message1"
          name="message1"
          label="Message"
          floating
        ></Textarea>

        <Select
          id="number1"
          label="Floating select input"
          placeholder="number1"
          floating
        >
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>

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
