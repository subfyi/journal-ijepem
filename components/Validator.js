
import { FormFeedback } from 'reactstrap';
import React from "react";

export default class Validator extends React.Component {
  render() {
    var error = this.props.validator.message(this.props.name || "field", this.props.value, this.props.type);

    var a = this.props.children;
    a = React.cloneElement(a, { invalid: !!error, className: (a.props.className || '') + (!!error ? ' is-invalid' : '') });

    return <>
      {a}
      {error && <FormFeedback className="d-block">{error}</FormFeedback>}
    </>;
  }
}
