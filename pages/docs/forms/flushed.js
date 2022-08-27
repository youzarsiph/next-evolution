import urls from "../../../urls";
import { View } from "../components";
import { Input, Textarea, Select } from "../../../components/forms";

export default function Flushed() {
  return (
    <View prevPage={urls["floating"]} nextPage={urls["component"]}>
      <article title="Flushed inputs">
        <h1 className="text-gradient gradient-primary">Flushed</h1>

        <Input
          id="email2"
          label="Email"
          type="email"
          name="email"
          placeholder="Email Address"
          flushed
          helpText="We'll never share your email with anyone else."
        />
        <Input
          id="password2"
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          flushed
        />
        <Textarea
          id="message2"
          name="message2"
          label="Message"
          placeholder="What do you want to tell us?"
          flushed
        ></Textarea>

        <Select
          id="number1"
          label="Flushed select input"
          placeholder="number1"
          flushed
        >
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>

        <h1 className="text-gradient gradient-primary">Flushed & Floating</h1>

        <Input
          id="email3"
          label="Email"
          type="email"
          name="email"
          placeholder="Email Address"
          flushed
          floating
          helpText="We'll never share your email with anyone else."
        />
        <Input
          id="password3"
          label="Password"
          type="password"
          name="password"
          flushed
          floating
        />
        <Textarea
          id="message3"
          name="message3"
          label="Message"
          flushed
          floating
        ></Textarea>

        <Select
          id="number2"
          label="Flushed & floating select input"
          flushed
          floating
        >
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>
      </article>
    </View>
  );
}
