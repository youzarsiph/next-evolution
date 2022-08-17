import urls from "../../../urls";
import { View } from "../components";
import { Button } from "../../../components/view";
import {
  InlineInput,
  Input,
  Textarea,
  Select,
  Switch,
} from "../../../components/forms";

export default function Overview() {
  return (
    <View prevPage={urls["tables"]} nextPage={urls["floating"]}>
      <article title="Basic inputs">
        <h1 className="text-gradient gradient-primary">Forms Overview</h1>
        <p className="text-xl font-light">
          Examples and usage guidelines for form using inputs, layout options
          for creating a wide variety of forms.
        </p>

        <h2>Basic</h2>
        <Input
          id="email"
          label="Email address"
          type="email"
          name="email"
          helpText="We'll never share your email with anyone else."
        />
        <Input id="password" type="password" name="password" label="Password" />
        <Textarea id="message" name="message" label="Message"></Textarea>
        <InlineInput
          id="check"
          name="check"
          type="checkbox"
          label="Check me out"
        />

        <InlineInput
          id="radio1"
          type="radio"
          name="radio"
          label="Default radio"
        />
        <InlineInput
          id="radio2"
          type="radio"
          name="radio"
          label="Another radio"
        />

        <Select id="number" label="Select input" placeholder="number">
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Select>

        <Input id="upload" type="file" name="upload" label="Upload" />

        <Switch id="x" label="Switch checkbox input" name="x" />

        <Button type="submit" color="primary">
          Submit
        </Button>
      </article>
    </View>
  );
}
