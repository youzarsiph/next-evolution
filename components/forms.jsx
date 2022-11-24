import { Component, createRef, useRef } from "react";

export class Form extends Component {
  /**
   * Form class to create form elements
   * @returns a form element
   */
  render() {
    return (
      <form
        method={this.props.method}
        action={this.props.action}
        encType={this.props.encType}
      >
        {this.props.children}
      </form>
    );
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
    };

    this.inputStyles = "form-control";

    // Label attributes
    this.labelStyles = "";
    this.labelBefore = true;

    // Handling variants
    if (props.floating) {
      this.labelBefore = false;
      this.labelStyles = "floating-label";
      this.inputStyles += " form-control-floating peer";
    }

    if (props.flushed) {
      this.inputStyles += " form-control-flushed";
    }
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
        <small className="mt-1 block text-slate-600">
          {this.props.helpText}
        </small>
      </div>
    );
  }
}

export class Input extends BaseInput {}

export class Select extends BaseInput {
  constructor(props) {
    super(props);

    // Update styles
    this.inputStyles += " form-select";
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
  constructor(props) {
    super(props);

    // The number of the lines inside the textarea
    this.rows = props.rows;
  }

  input() {
    return (
      <textarea
        id={this.props.id}
        name={this.props.name}
        rows={this.props.rows}
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
    this.state.type = props.type === "checkbox" ? "checkbox" : "radio";
    this.inputStyles = "form-check";

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
    this.inputStyles = "form-switch";
  }
}

export class Range extends BaseInput {
  constructor(props) {
    super(props);

    // Range ref
    this.rangeRef = createRef();

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
    this.inputStyles = "form-range";
  }

  onChange() {
    this.setState({ value: this.rangeRef.current.value });
  }

  input() {
    return (
      <input
        type={"range"}
        id={this.props.id}
        ref={this.rangeRef}
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

    // Refs
    this.colorRef = createRef();
    this.inputRef = createRef();

    // Binding methods
    this.onChange = this.onChange.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);

    // State
    this.state = {
      value: props.value || "#0f172a",
      disabled: props.disabled || false,
    };

    this.inputStyles = "form-color";
  }

  onChange() {
    this.setState({ value: this.colorRef.current.value });
    this.inputRef.current.value = this.state.value;
  }

  onChangeInput() {
    this.setState({ value: this.inputRef.current.value });
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
            className={
              "mb-0 block h-8 w-10 cursor-pointer rounded border shadow-sm"
            }
            style={{ backgroundColor: this.state.value }}
          ></label>
          {this.input()}
          <input
            type={"text"}
            maxLength={7}
            ref={this.inputRef}
            value={this.state.value}
            id={this.props.id + "-input"}
            onChange={this.onChangeInput}
            className={"w-full outline-none"}
            pattern={"^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"}
          />
        </label>
        <small className="mt-1 block text-slate-600">
          {this.props.helpText}
        </small>
      </div>
    );
  }
}
