import Props from "./index";
import React, { CSSProperties } from "react";
import styles from "../styles/components/Input.module.css";

interface LabelProps extends Props {
  for?: string;
}

export class Label extends React.Component<LabelProps> {
  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <label htmlFor={this.props.for}>{this.props.children}</label>
      </div>
    );
  }
}

interface InputProps {
  id?: string;
  name: string;
  flushed?: boolean;
  disabled?: boolean;
  placeholder?: string;
  value?: string | number;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

interface InputState extends Props {
  disabled: boolean;
  value: string | number;
}

export class Input extends React.Component<InputProps, InputState> {
  protected type: string = "text";
  protected style: string = styles.input;

  constructor(props: InputProps) {
    super(props);

    this.type = props.type;

    // Bind methods
    this.onChange = this.onChange.bind(this);

    // State
    this.state = {
      value: props.value || "",
      disabled: props.disabled || false,
    };

    if (props.flushed) {
      this.style += ` ${styles.flushed}`;
    }
  }

  // Handle the change
  onChange(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <input
        {...this.props}
        type={this.type}
        className={this.style}
        value={this.state.value}
        onChange={this.onChange}
        disabled={this.state.disabled}
      />
    );
  }
}

// interface FloatingLabelProps extends InputProps {}

interface FloatingLabelState extends InputState {
  floating?: boolean;
}

export class FloatingLabel extends React.Component<
  InputProps,
  FloatingLabelState
> {
  protected type: string = "text";
  protected style: string = styles.input + " " + styles.floating;

  constructor(props: InputProps) {
    super(props);

    // Bind methods
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    // State
    this.state = {
      value: props.value || "",
      disabled: props.disabled || false,
      floating: false,
    };

    this.type = props.type;

    if (props.flushed) {
      this.style += ` ${styles.flushed}`;
    }
  }

  // Handle the change
  onChange(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  onFocus() {
    this.setState({ ...this.state, floating: true });
  }

  onBlur() {
    this.setState({ ...this.state, floating: false });
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <input
          {...this.props}
          type={this.type}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          className={this.style}
          value={this.state.value}
          onChange={this.onChange}
          disabled={this.state.disabled}
        />
        <label
          htmlFor={this.props.id}
          className={`${styles.label} ${
            this.state.floating || this.state.value !== ""
              ? styles.floatingLabel
              : ""
          }`}
        >
          {this.props.placeholder}
        </label>
      </div>
    );
  }
}

interface SelectProps extends Props {
  id?: string;
  name: string;
  flushed?: boolean;
  floating?: boolean;
  disabled?: boolean;
  value?: string | number;
}

export class Select extends React.Component<SelectProps, InputState> {
  private style: string = styles.input + " " + styles.select;

  constructor(props: SelectProps) {
    super(props);

    // Bind methods
    this.onChange = this.onChange.bind(this);

    // State
    this.state = {
      value: props.value || "",
      disabled: props.disabled || false,
    };

    if (props.floating) {
      this.style += ` ${styles.floating}`;
    }

    if (props.flushed) {
      this.style += ` ${styles.flushed}`;
    }
  }

  // Handle the change
  onChange(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <select
        {...this.props}
        className={this.style}
        disabled={this.state.disabled}
      >
        {this.props.children}
      </select>
    );
  }
}

interface TextareaProps extends InputProps {
  rows?: number;
  cols?: number;
}

export class Textarea extends React.Component<TextareaProps, InputState> {
  private style: string = styles.input;

  constructor(props: TextareaProps) {
    super(props);

    // Bind methods
    this.onChange = this.onChange.bind(this);

    // State
    this.state = {
      value: props.value || "",
      disabled: props.disabled || false,
    };

    if (props.flushed) {
      this.style += ` ${styles.flushed}`;
    }
  }

  // Handle the change
  onChange(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <textarea
        rows={4}
        {...this.props}
        className={this.style}
        value={this.state.value}
        onChange={this.onChange}
        disabled={this.state.disabled}
      ></textarea>
    );
  }
}

export class Checkbox extends Input {
  constructor(props: InputProps) {
    super(props);

    this.type = "checkbox";
    this.style = styles.checkbox;
  }
}

export class Radio extends Input {
  constructor(props: InputProps) {
    super(props);

    this.type = "radio";
    this.style = styles.checkbox + " " + styles.radio;
  }
}

export class Switch extends Checkbox {
  constructor(props: InputProps) {
    super(props);

    this.type = "checkbox";
    this.style += ` ${styles.switch}`;
  }
}

interface RangeProps extends InputProps {
  min?: number;
  max?: number;
}

export class Range extends React.Component<RangeProps, InputState> {
  private style: string = styles.input + " " + styles.range;

  constructor(props: RangeProps) {
    super(props);

    // Bind methods
    this.onChange = this.onChange.bind(this);

    // State
    this.state = {
      disabled: false,
      value: props.value || props.min || 0,
    };
  }

  // Handle the change
  onChange(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <span className={styles.rangeText}>{this.props.min}</span>
          <input
            {...this.props}
            type={"range"}
            className={this.style}
            value={this.state.value}
            onChange={this.onChange}
            disabled={this.state.disabled}
          />
          <span className={styles.rangeText}>{this.props.max}</span>
        </div>
      </div>
    );
  }
}

interface ColorProps extends InputProps {
  value: CSSProperties["backgroundColor"];
}

interface ColorState extends InputState {
  value: CSSProperties["backgroundColor"];
}

export class Color extends React.Component<ColorProps, ColorState> {
  private type: string = "color";
  private style: string = styles.input + " " + styles.color;

  constructor(props: ColorProps) {
    super(props);

    // Binding methods
    this.onChange = this.onChange.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    // State
    this.state = {
      value: props.value || "#0f172a",
      disabled: props.disabled || false,
    };
  }

  // Handle the change
  onChange(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  onChangeInput(event: { target: { value: any } }) {
    this.setState({ ...this.state, value: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <label htmlFor={this.props.id + "-input"} className={this.style}>
          <label
            htmlFor={this.props.id}
            className={styles.picker}
            style={{ backgroundColor: this.state.value }}
          ></label>
          <input
            {...this.props}
            type={this.type}
            className={"sr-only"}
            value={this.state.value}
            onChange={this.onChange}
            disabled={this.state.disabled}
          />
          <input
            type={"text"}
            maxLength={7}
            value={this.state.value}
            id={this.props.id + "-input"}
            onChange={this.onChangeInput}
            className={"w-full outline-none"}
            pattern={"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"}
          />
        </label>
      </div>
    );
  }
}
