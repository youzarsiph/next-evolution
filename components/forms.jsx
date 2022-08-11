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
    this.id = this.props.id;
    this.type = this.props.type;
    this.name = this.props.name;
    this.inputStyles = "form-control";
    this.placeholder = this.props.placeholder;
    this.helpText = this.props.helpText;

    // Label attributes
    this.labelBefore = true;
    this.label = this.props.label;
    this.labelStyles = "inline-block mb-2";

    // Handling variants
    if (this.props.floating) {
      this.inputStyles += " form-control-floating peer";
      this.labelStyles = "floating-label left-4";
      this.labelBefore = false;
      this.placeholder = this.props.label;
    }

    if (this.props.flushed) {
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
     * You need to override this method in sub-classes if you want to render
     */
    return (
      <input
        type={this.type}
        name={this.name}
        id={this.id}
        placeholder={this.placeholder}
        className={this.inputStyles}
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

export class Input extends BaseInput {
  constructor(props) {
    super(props);
  }
}

export class Select extends BaseInput {
  constructor(props) {
    super(props);
  }

  getInput() {
    return (
      <select
        name={this.props.name}
        id={this.props.id}
        placeholder={this.placeholder}
        className={this.inputStyles}
      >
        {this.props.children}
      </select>
    );
  }
}

export class Textarea extends BaseInput {
  constructor(props) {
    super(props);
    this.rows = this.props.rows;
  }

  getInput() {
    return (
      <textarea
        name={this.props.name}
        id={this.props.id}
        placeholder={this.placeholder}
        className={this.inputStyles}
        rows={this.props.rows}
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
    this.type = this.props.type === "checkbox" ? "checkbox" : "radio";
    this.inputStyles = "form-check";
    if (this.props.type === "radio") {
      this.inputStyles += " before:rounded-full";
    }

    // Label attributes
    this.labelBefore = false;
    this.labelStyles = "inline-block ml-4";
  }
}

export class Switch extends InlineInput {
  constructor(props) {
    super(props);
    // Input attributes
    this.type = "checkbox";
    this.inputStyles = "form-switch";

    // Label attributes
    this.labelStyles = "inline-block ml-8";
  }
}
