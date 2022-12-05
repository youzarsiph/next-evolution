import { Component } from "react";
import styles from "../styles/components/Input.module.css";

export class Form extends Component {
  /**
   * Form class to create form elements
   * @returns a form element
   */
  render() {
    return <form {...this.props}>{this.props.children}</form>;
  }
}

class BaseInput extends Component {
  /**
   * Base class to create input elements
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // State
    this.state = {
      type: props.type || "text",
      disabled: props.disabled || false,
      value: props.value || "",
    };

    this.inputStyles = styles.input;

    // Label attributes
    this.labelStyles = "";
    this.labelBefore = true;

    // Handling variants
    if (props.floating) {
      this.labelBefore = false;
      this.labelStyles = styles.label;
      this.inputStyles += ` ${styles.floating} peer`;
    }

    if (props.flushed) {
      this.inputStyles += `" ${styles.flushed}`;
    }

    // Bind onChange
    this.onChange = this.onChange.bind(this);
  }

  // Creating the label
  label() {
    /**
     * A method to render the label for the input field.
     */
    return (
      <label htmlFor={this.props.id} className={this.labelStyles}>
        {this.props.label}
      </label>
    );
  }

  // Handle the change
  onChange(event) {
    this.setState({ ...this.state, value: event.target.value });
  }

  // Creating the input
  input() {
    /**
     * A method to render the input field.
     */
    return (
      <input
        id={this.props.id}
        type={this.state.type}
        name={this.props.name}
        value={this.state.value}
        onChange={this.onChange}
        disabled={this.state.disabled}
        className={this.inputStyles + " " + (this.props.className || "")}
        placeholder={this.props.placeholder}
      />
    );
  }

  render() {
    return (
      <div className="relative mb-6">
        {this.labelBefore ? this.label() : this.input()}
        {!this.labelBefore ? this.label() : this.input()}
        {this.props.helpText && (
          <small className="mt-1 block text-slate-600">
            {this.props.helpText}
          </small>
        )}
      </div>
    );
  }
}

export class Input extends BaseInput {}

export class Select extends BaseInput {
  constructor(props) {
    super(props);

    // Update styles
    this.inputStyles += styles.select;
  }

  input() {
    return (
      <select
        id={this.props.id}
        name={this.props.name}
        className={this.inputStyles}
        disabled={this.state.disabled}
        placeholder={this.props.placeholder}
      >
        {this.props.children}
      </select>
    );
  }
}

export class Textarea extends BaseInput {
  input() {
    return (
      <textarea
        id={this.props.id}
        name={this.props.name}
        rows={this.props.rows}
        value={this.state.value}
        onChange={this.onChange}
        className={this.inputStyles}
        disabled={this.state.disabled}
        placeholder={this.props.placeholder}
      ></textarea>
    );
  }
}

export class InlineInput extends BaseInput {
  /**
   * InlineInput component to create checkboxes, radio buttons and switches
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Input attributes
    this.inputStyles = styles.checkbox;

    if (props.type === "radio") {
      this.inputStyles += " rounded-full";
    }

    // Label attributes
    this.labelBefore = false;
    this.labelStyles = "ml-4 mb-0";
  }
}

export class Switch extends InlineInput {
  constructor(props) {
    super(props);

    // Input attributes
    this.state.type = "checkbox";
    this.inputStyles = styles.switch;
  }
}

export class Range extends BaseInput {
  constructor(props) {
    super(props);

    // Binding methods
    this.onChange = this.onChange.bind(this);

    // State
    this.state = {
      min: props.min || 0,
      max: props.max || 100,
      value: props.value || 0,
      disabled: props.disabled || false,
    };

    this.labelStyles = "mb-0";
    this.inputStyles = styles.range;
  }

  onChange(event) {
    this.setState({ ...this.state, value: event.target.value });
  }

  input() {
    return (
      <input
        type={"range"}
        id={this.props.id}
        min={this.state.min}
        max={this.state.max}
        name={this.props.name}
        value={this.state.value}
        onChange={this.onChange}
        disabled={this.state.disabled}
        className={this.inputStyles + " " + (this.props.className || "")}
      />
    );
  }

  render() {
    return (
      <div className="relative mb-6">
        <div
          className={
            "mb-4 flex items-center justify-between gap-2 leading-none"
          }
        >
          {this.label()}
          <span className="form-range-text h-auto px-2 text-sm">
            {this.state.value}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="form-range-text">{this.state.min}</span>
          {this.input()}
          <span className="form-range-text">{this.state.max}</span>
        </div>
        <small className="mt-1 text-slate-600">{this.props.helpText}</small>
      </div>
    );
  }
}

export class Color extends BaseInput {
  constructor(props) {
    super(props);

    // Binding methods
    this.onChange = this.onChange.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    // State
    this.state = {
      value: props.value || "#0f172a",
      disabled: props.disabled || false,
    };

    this.inputStyles = styles.color;
  }

  onChange(event) {
    this.setState({ ...this.state, value: event.target.value });
  }

  onChangeInput(event) {
    this.setState({ ...this.state, value: event.target.value });
  }

  input() {
    return (
      <input
        type={"color"}
        id={this.props.id}
        ref={this.colorRef}
        name={this.props.name}
        value={this.state.value}
        onChange={this.onChange}
        disabled={this.state.disabled}
        className={"sr-only"}
      />
    );
  }

  render() {
    return (
      <div className="relative mb-6">
        {this.label()}
        <label
          htmlFor={this.props.id + "-input"}
          className={`${
            this.inputStyles + " " + (this.props.className || "")
          } gap-4 `}
        >
          <label
            htmlFor={this.props.id}
            className={"mb-0 block h-8 w-10 cursor-pointer rounded shadow-lg"}
            style={{ backgroundColor: this.state.value }}
          ></label>
          {this.input()}
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
        {this.props.helpText && (
          <small className="mt-1 block text-slate-600">
            {this.props.helpText}
          </small>
        )}
      </div>
    );
  }
}
