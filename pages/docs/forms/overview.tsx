import urls from "../../../urls";
import { View } from "../components/index";
import { Button } from "../../../components/button";
import {
  Checkbox,
  Input,
  Textarea,
  Select,
  Switch,
  Range,
  Color,
  Label,
  Radio,
} from "../../../components/input";

export default function Overview() {
  const description = `
    Examples and usage guidelines for form using inputs, layout options
    for creating a wide variety of forms.
  `;

  return (
    <View
      title="Forms Overview"
      description={description}
      prev={urls["tables"]}
      next={urls["floating"]}
    >
      <article title="Basic inputs">
        <h2>Basic</h2>

        <Label>
          <div className="mb-2">Email address</div>
          <Input id="email" type="email" name="email" />
          <small className="text-slate-500">
            We will never share your email with anyone else.
          </small>
        </Label>

        <Label>
          <div className="mb-2">Password</div>
          <Input id="password" type="password" name="password" />
        </Label>

        <Label>
          <div className="mb-2">Message</div>
          <Textarea id="message" name="message"></Textarea>
        </Label>

        <Label>
          <Checkbox id="check" name="check" type="checkbox" />
          <span className="ml-4">Check me out</span>
        </Label>

        <Label>
          <Radio id="radio1" name="radio" />
          <span className="ml-4">Default radio</span>
        </Label>

        <Label>
          <Radio id="radio2" name="radio" />
          <span className="ml-4">Another radio</span>
        </Label>

        <Label>
          <div className="mb-2">Select</div>
          <Select id="number" name="number">
            <option value="0">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
        </Label>

        <Label>
          <div className="mb-2">File</div>
          <Input id="upload" type="file" name="upload" />
        </Label>

        <Label>
          <Switch id="switch" name="x" />
          <span className="ml-4">Switch checkbox</span>
        </Label>

        <Label>
          <div className="mb-2">Range</div>
          <Range min={0} max={100} id={"range"} name={"range"} />
        </Label>

        <Label>
          <div className="mb-2">Color</div>
          <Color id={"color"} name={"color"} />
        </Label>

        <Button type="submit" color="primary">
          Submit
        </Button>
      </article>
    </View>
  );
}
