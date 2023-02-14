import urls from "../../../urls";
import { View } from "../components/index";
import {
  Input,
  FloatingLabel,
  Textarea,
  Select,
  Label,
} from "../../../components/input";

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
            We will never share your email with anyone else.
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

        <FloatingLabel
          id="email"
          name="email"
          type="email"
          placeholder={"Email"}
          flushed
        />

        <FloatingLabel
          id="Password"
          type="password"
          name="password"
          placeholder={"Password"}
          flushed
        />
      </article>
    </View>
  );
}
