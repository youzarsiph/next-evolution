import urls from "../../../urls";
import { View } from "../components/index";
import { Input, Textarea, Select, Label } from "../../../components/input";

export default function Flushed() {
  return (
    <View
      title="Flushed Inputs"
      description=""
      prev={urls["floating"]}
      next={urls["component"]}
    >
      <article title="Flushed inputs">
        <Label>
          <div className="mb-2">Email</div>
          <Input type="email" name="email" placeholder="Email" flushed />
          <small className="text-slate-400">
            We'll never share your email with anyone else.
          </small>
        </Label>

        <Label>
          <div className="mb-2">Password</div>
          <Input name="pass" type="password" placeholder="Password" flushed />
        </Label>

        <Label>
          <div className="mb-2">Message</div>
          <Textarea name="message" placeholder="Message" flushed></Textarea>
        </Label>

        <Label>
          <div className="mb-2">Number</div>
          <Select name="number" flushed>
            <option value="0">Select a number</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Select>
        </Label>

        <h1 className="text-gradient gradient-primary">Combine the styles</h1>

        <Label text="Email" for="email" floating>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={"Email"}
            floating
            flushed
          />
        </Label>

        <Label text="Password" for="password" floating>
          <Input
            id="Password"
            type="password"
            name="password"
            placeholder={"Password"}
            flushed
            floating
          />
        </Label>

        <Label text="Message" for="message" floating>
          <Textarea
            id="Message"
            name="message"
            placeholder={"Message"}
            flushed
            floating
          ></Textarea>
        </Label>
      </article>
    </View>
  );
}
