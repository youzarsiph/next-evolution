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
   * Base classs to create input elemnts
   * @param {*} props
   */
  constructor(props) {
    super(props);

    // Input attributes
    this.id = props.id;
    this.type = props.type;
    this.name = props.name;
    this.inputStyles = "form-control";
    this.helpText = props.helpText;
    this.placeholder = props.placeholder;

    // Label attributes
    this.labelBefore = true;
    this.label = props.label;
    this.labelStyles = "";

    // Handling variants
    if (props.floating) {
      this.labelBefore = false;
      this.placeholder = this.label;
      this.labelStyles = "floating-label left-4";
      this.inputStyles += " form-control-floating peer";
    }

    if (props.flushed) {
      this.inputStyles += " form-control-flushed";
      this.labelStyles = this.labelStyles.replace("left-4", "");
    }
  }

  // Creating the label
  getLabel() {
    /**
     * A method to render the label for the input field.
     */
    return (
      <label htmlFor={this.id} className={this.labelStyles}>
        {this.label}
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
        id={this.id}
        type={this.type}
        name={this.name}
        className={this.inputStyles}
        placeholder={this.placeholder}
      />
    );
  }

  render() {
    return (
      <div className="relative mb-4">
        {this.labelBefore ? this.getLabel() : this.getInput()}
        {!this.labelBefore ? this.getLabel() : this.getInput()}
        <small className="block mt-1 text-slate-400">{this.helpText}</small>
      </div>
    );
  }
}

export class Input extends BaseInput {}

export class Select extends BaseInput {
  getInput() {
    return (
      <select
        id={this.id}
        name={this.name}
        className={this.inputStyles}
        placeholder={this.placeholder}
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
        id={this.id}
        name={this.name}
        rows={this.rows}
        className={this.inputStyles}
        placeholder={this.placeholder}
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
    this.type = props.type === "checkbox" ? "checkbox" : "radio";
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
    this.type = "checkbox";
    this.inputStyles = "form-switch";
  }
}
