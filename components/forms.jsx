import { Component } from "react";

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
  getLabel() {
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
  getInput() {
    /**
     * A method to render the input field.
     */
    return (
      <input
        id={this.props.id}
        type={this.state.type}
        name={this.props.name}
        disabled={this.state.disabled}
        className={this.inputStyles + " " + this.props.className}
        placeholder={this.props.placeholder}
      />
    );
  }

  render() {
    return (
      <div className="relative mb-6">
        {this.labelBefore ? this.getLabel() : this.getInput()}
        {!this.labelBefore ? this.getLabel() : this.getInput()}
        <small className="mt-1 block text-slate-600">
          {this.props.helpText}
        </small>
      </div>
    );
  }
}

export class Input extends BaseInput {}

export class Select extends BaseInput {
  getInput() {
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

  getInput() {
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
    this.labelStyles = "ml-4";
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
