import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class FormCheckbox extends React.Component {
  render() {
    return (
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
          />
        }
        label={this.props.title}
        style={{marginBottom: '20px'}}
      />
    )
  }
}
