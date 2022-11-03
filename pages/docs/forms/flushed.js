import urls from "../../../urls";
import { View } from "../components";
import { Input, Textarea, Select } from "../../../components/forms";

export default function Flushed() {
  return (
    <View prevPage={urls["floating"]} nextPage={urls["component"]}>
      <article title="Flushed inputs">
        <h1 className="text-gradient gradient-primary">Flushed</h1>

        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          placeholder="Email Address"
          flushed
          helpText="We'll never share your email with anyone else."
        />
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          flushed
        />
        <Textarea
          id="message"
          name="message"
          label="Message"
          placeholder="What do you want to tell us?"
          flushed
        ></Textarea>

        <Select id="number1" label="Issue" placeholder="number1" flushed>
          <option value="0">Select your issue</option>
          <option value="1">1st Issue</option>
          <option value="2">2nd Issue</option>
          <option value="3">3rd Issue</option>
        </Select>

        <h1 className="text-gradient gradient-primary">Combination</h1>

        <Input
          id="Email"
          label="Email"
          type="email"
          name="email"
          placeholder={"Email"}
          flushed
          floating
          helpText="We'll never share your email with anyone else."
        />
        <Input
          id="Password"
          label="Password"
          type="password"
          name="password"
          placeholder={"Password"}
          flushed
          floating
        />
        <Textarea
          id="Message"
          name="message"
          label="Message"
          placeholder={"Message"}
          flushed
          floating
        ></Textarea>
      </article>
    </View>
  );
}
