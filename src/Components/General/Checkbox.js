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
            onChange={this.props.onChange}
          />
        }
        label={this.props.title}
        style={{width: '100%', marginBottom: '20px'}}
      />
    )
  }
}
